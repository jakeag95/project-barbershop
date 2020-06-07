const express = require('express');
const router = express.Router();
const PendingEmployeeController = require('../controllers/pendingEmployeeController');

router.get('/', PendingEmployeeController.getPendingEmployees);
router.post('/approveEmployee/:pendingEmployeeId', PendingEmployeeController.approveEmployee);
router.delete('/rejectEmployee/:pendingEmployeeId', PendingEmployeeController.rejectEmployee);

module.exports = router;