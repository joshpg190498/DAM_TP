const express = require('express')
const { authenticator } = require('../middlewares')
const { insertLogRiego } = require('../controllers/irrigations')
const router = express.Router()

router.post('/', [authenticator], insertLogRiego)


module.exports = router