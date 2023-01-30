import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

const config = dotenv.config();

config.parsed ? process.env = config.parsed : null;

const dbConfig = {
  host: process.env.HOST || "localhost",
  user: process.env.DBUSER || "root",
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

process.env.PASS ? dbConfig.password = process.env.DBPASS : null;

const connection = () => {
  let conn;

  const connect = async () => {
    conn = await mysql2.createConnection(dbConfig);
    return conn;
  };
  
  const closeCon = async () => {
    if(!conn) return;
    await conn.end();
  };

  return [ connect,  closeCon, conn ];
};

export default connection;