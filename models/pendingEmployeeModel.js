const mongoose = require('mongoose').set('debug', true);

const PendingEmployeeSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profilePic: String,
  schedule: String,
  status: String,
  services: Array
},
{
  collection: 'pendingEmployees'
});

module.exports = exports = mongoose.model('pendingEmployees', PendingEmployeeSchema);