const PendingEmployee = require('../models/pendingEmployeeModel');
const Employee = require('../models/employeeModel');

exports.getPendingEmployees = (req, res) =>{
    PendingEmployee.find({}, function(err, pendingEmployees) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting pending employees.',
          error: err
        });
      }
    res.json(pendingEmployees);
    });
  }

  exports.approveEmployee = (req, res) => {
    const options = { rawResult:true }
    PendingEmployee.findOneAndDelete({'_id' : req.params.pendingEmployeeId}, options, function(err, pendingEmployee){
        if (err) {
          return res.status(500).json({
            message:'Error removing pending employee.',
            error: err
          });
        }
        res.json(pendingEmployee);
        
        var employee = [
          {
            _id: pendingEmployee.value._id,
            name: pendingEmployee.value.name,
            bio: pendingEmployee.value.bio,
            profilePic: pendingEmployee.value.profilePic,
            schedule: pendingEmployee.value.schedule,
            status: pendingEmployee.value.status,
            services: pendingEmployee.value.services
          }
        ];

        Employee.create(employee, function(err){
          if (err) {
            return res.status(500).json({
              message:'Error creating employee.',
              error: err
            });
          }
        });
    });
  }

  exports.rejectEmployee = (req, res) => {
    PendingEmployee.findOneAndDelete({'_id' : req.params.pendingEmployeeId}, function(err, pendingEmployee){
      if (err) {
        return res.status(500).json({
          message:'Error removing pending employee.',
          error: err
        });
      }
      res.json(pendingEmployee);
  }
)};

