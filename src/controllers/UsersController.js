class UsersController {
  create(request, response) {
    const { name, email } = request.body
    response.status(201).json({ name, email })
    // response.send(`Nome: ${name}. E-mail: ${email}`)
  }
}

module.exports = UsersController
