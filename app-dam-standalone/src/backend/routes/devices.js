const express = require('express')
const { getAllDevices, getDevice } = require('../controllers/devices')
const router = express.Router()

// Get all devices
router.get('/', getAllDevices)
router.get('/:id', getDevice)

module.exports = router