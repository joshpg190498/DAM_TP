const pool = require('../mysql-connector')

function getAllDevices (req, res) {
    pool.query(`select * from Dispositivos`, (err, result, fields) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

function getDevice (req, res) {
    const deviceID = req.params.id
    pool.query(`select * from Dispositivos where dispositivoId = ${deviceID}`, (err, result, fields) => {
        if (err) {
            return res.status(500).send(err)
        }
        const device = result[0]
        res.status(200).send(device)
    })
}


module.exports = {
    getAllDevices,
    getDevice
}