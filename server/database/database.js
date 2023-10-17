const sqlite3 = require("sqlite3").verbose();
const dbConnection = new sqlite3.Database("../db/dashen-tour.db");

export default dbConnection;
