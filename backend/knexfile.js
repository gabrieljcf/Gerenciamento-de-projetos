const path = require('path');

module.exports = {
  client: 'mysql',
  connection: {
    database: 'manage_project',
    user: 'root',
    password: 'root'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
};
