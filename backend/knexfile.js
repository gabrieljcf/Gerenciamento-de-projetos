module.exports = {
  client: 'mysql',
  connection: {
    database: 'manage_project',
    user: 'root',
    password: 'root'
  },
  migrations: {
    directory: './src/dabase/migrations'
  }
};
