const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const path = require('path');
const EmployeeRoutes = require('./routes/employeeRoutes');

const app = express()
const PORT = config.port || 5000;

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/api/employees', EmployeeRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    require('./db');
  });


