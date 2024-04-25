const express = require('express')
const { getAllDevices, getDevice, getDeviceMeasurements, getLastDeviceMeasurement } = require('../controllers/devices')
const { authenticator } = require('../middlewares')
const router = express.Router()

// Get all devices
router.get('/', [authenticator], getAllDevices)
router.get('/:id', [authenticator], getDevice)
router.get('/:id/measurements', [authenticator], getDeviceMeasurements)
router.get('/:id/lastMeasurement', [authenticator], getLastDeviceMeasurement)


module.exports = router