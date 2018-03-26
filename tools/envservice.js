const envDB = {
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
}

function getEnv(connObj) {
  return (connObj || envDB);
}

module.exports = {
  getEnv
}