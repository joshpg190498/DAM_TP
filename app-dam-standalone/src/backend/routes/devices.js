const express = require('express')
const { getAllDevices } = require('../controllers/devices')
const router = express.Router()

// Get all devices
router.get('/', getAllDevices)

module.exports = router