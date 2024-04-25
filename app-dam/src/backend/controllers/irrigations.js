const pool = require('../mysql-connector')

function insertLogRiego (req, res) {
    const { electrovalveId, aperture } = req.body
    const date = new Date().toISOString().replace('T',' ').replace('Z', '')
    pool.query(`insert into Log_Riegos (apertura, fecha, electrovalvulaId) 
        values (${aperture}, '${date}', ${electrovalveId})`, (err, result, fields) => {
            if (err) {
                return res.status(500).send({ message: 'Error with log register.'})
            }
            return res.status(200).send({ message: 'Irrigation Log registered successfully'})
        })
}


module.exports = {
    insertLogRiego
}