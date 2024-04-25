const testUser = {
    username: 'root', 
    password: 'root'
}

const SECRET_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

function login(req, res) {
    if (req.body) {
        var userData = req.body

        if (testUser.username === userData.username && testUser.password === userData.password) {
            res.status(200).send({
                signed_user: userData,
                token: SECRET_KEY
            })
        } else {
            res.status(403).send({
                errorMessage: 'Auth required'
            })
        }
    } else {
        res.status(403).send({
            errorMessage: 'Se requiere un usuario y contraseña'
        })
    }
}

module.exports = {
    login
}