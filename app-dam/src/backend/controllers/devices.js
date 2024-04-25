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
    pool.query(`select d.nombre, d.ubicacion, m.valor, m.fecha from Mediciones m
        inner join Dispositivos d on d.dispositivoId = m.dispositivoId
        where m.dispositivoId = ${deviceID} 
        order by m.fecha desc`, (err, result, fields) => {
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

function getLastValveState (req, res) {
    const deviceID = req.params.id
    pool.query(`select d.dispositivoId, d.electrovalvulaId, 
        lr.logRiegoId, lr.apertura, lr.fecha from Log_Riegos lr
        inner join Dispositivos d on d.electrovalvulaId = lr.electrovalvulaId 
        where d.dispositivoId = ${deviceID} 
        order by lr.fecha desc 
        limit 1`, (err, result, fields) => {
            if (err) {
                return res.status(500).send(err)
            }
            if(result.length === 0) {
                return res.status(200).send(null)
            }
            return res.status(200).send(result[0])
        })
}

function getDeviceIrrigations (req, res) {
    const deviceID = req.params.id
    pool.query(`select d.nombre, d.ubicacion, d.electrovalvulaId, 
    lr.logRiegoId, lr.apertura, lr.fecha from Log_Riegos lr
    inner join Dispositivos d on d.electrovalvulaId = lr.electrovalvulaId 
    where d.dispositivoId = ${deviceID} 
    order by lr.fecha desc`, (err, result, fields) => {
        if (err) {
            return res.status(500).send(err)
        }
        const irrigations = result
        return res.status(200).send(irrigations)
    })
}

module.exports = {
    getAllDevices,
    getDevice,
    getDeviceMeasurements,
    getLastDeviceMeasurement,
    getLastValveState,
    getDeviceIrrigations
}