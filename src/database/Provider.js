export default function (conn) {
  if(!conn) throw new Error('Connection is not defined');
  
  const query = async (sql, params) => {
    const [rows] = await conn.execute(sql, params);
    return rows;
  };

  const insert = async (table, data) => {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const sql = `INSERT INTO ${table} (${fields.join(',')}) VALUES (${values.map(() => '?').join(',')})`;
    const [result] = await conn.execute(sql, values);
    return result;
  }

  const update = async (table, data, where) => {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const sql = `UPDATE ${table} SET ${fields.map(field => `${field} = ?`)} WHERE ${where}`;
    const [result] = await conn.execute(sql, values);
    return result;
  }

  const remove = async (table, where) => {
    const sql = `DELETE FROM ${table} WHERE ${where}`;
    const [result] = await conn.execute(sql);
    return result;
  }

  return [ query, insert, update, remove ]
}