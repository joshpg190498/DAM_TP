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

function getDeviceMeasurements (req, res) {
    const deviceID = req.params.id
    pool.query(`select * from Mediciones where dispositivoId = ${deviceID}`, (err, result, fields) => {
        if (err) {
            return res.status(500).send(err)
        }
        const measurements = result
        return res.status(200).send(measurements)
    })
}

function getLastDeviceMeasurement (req, res) {
    const deviceID = req.params.id
    pool.query(`select * from Mediciones 
        where dispositivoId = ${deviceID} 
        order by fecha desc 
        limit 1`, (err, result, fields) => {
            if (err) {
                return res.status(500).send(err)
            }
            const lastMeasurement = result[0]
            return res.status(200).send(lastMeasurement)
        })

}

module.exports = {
    getAllDevices,
    getDevice,
    getDeviceMeasurements,
    getLastDeviceMeasurement
}