const pool = require('../mysql-connector')

function getAllDevices (req, res) {
    pool.query(`select * from Dispositivos`, (err, result, fields) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

module.exports = {
    getAllDevices
}