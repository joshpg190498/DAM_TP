const express = require('express')
const { getAllDevices, getDevice, getDeviceMeasurements, getLastDeviceMeasurement } = require('../controllers/devices')
const router = express.Router()

// Get all devices
router.get('/', getAllDevices)
router.get('/:id', getDevice)
router.get('/:id/measurements', getDeviceMeasurements)
router.get('/:id/lastMeasurement', getLastDeviceMeasurement)


module.exports = router