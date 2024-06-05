const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth") //arquivo de configurações de authenticação.

function ensureAuthenticated(request, response, next) {
  // informações do token
  const authHeader = request.headers.authorization

  //verificando se existe um token
  if (!authHeader) {
    throw new AppError("JWT token não informado", 401)
  }
  //atribuindo o atributo do array em uma variável token utilizando o split.
  const [, token] = authHeader.split(" ")

  try {
    //veriricando se o token é válido
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    //atribuindo a informação de ID contida no token em uma request user que pode ser acessada
    //em outras partes da aplicação.
    request.user = {
      id: Number(user_id),
    }

    return next()
  } catch {
    throw new AppError("JWT token inválido", 401)
  }
}

module.exports = ensureAuthenticated
