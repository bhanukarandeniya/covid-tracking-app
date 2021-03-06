const env = require('custom-env').env()

const APP = {
  port: process.env.APP_PORT,
  cors_origin: 'http://localhost:8081'

}

const DB = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: process.env.DB_POOL_ACQUIRE,
    idle: process.env.DB_POOL_IDLE
  },
  max_covid_incident_records: process.env.COVID_RECORDS,
  max_person_records: process.env.PERSON_RECORDS
}

const CACHE = {
  host: process.env.CACHE_HOST,
  port: process.env.CACHE_PORT
}

module.exports = { DB, APP, CACHE }
