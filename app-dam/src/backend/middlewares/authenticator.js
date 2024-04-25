const SECRET_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

export default function authenticator (req, res, next) {
    let autHeader = (req.headers.authorization || '')
    let token = ''
    if (autHeader.startsWith('Bearer ')) {
        token = autHeader.split(' ')[1]
    } else {
        res.status(401).send({ message: 'Se requiere un token de tipo Bearer' })
    }
    if (token === SECRET_KEY) {
        next
    } else {
        res.status(403).send({ message: 'Token inválido' })
      }
    next()
}
