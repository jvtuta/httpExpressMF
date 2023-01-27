import Connection from "./connection.js";
import Provider from "./Provider.js";

const [connect, closeCon, conn] = Connection();
await connect();
const [query, insert, update, remove] = Provider(conn);

export default {
  connect,
  closeCon,
  query,
  insert,
  update,
  remove,
  conn,
}