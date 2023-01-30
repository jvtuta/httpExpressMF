import mysql2 from "mysql2/promise";

const dbConfig = {
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  database: process.env.DB || 'central-drogafuji',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

process.env.PASS ? dbConfig.password = process.env.PASS : null;

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