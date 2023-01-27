import Connection from "./connection.js";
import Provider from "./Provider.js";

let [connect, closeCon ] = Connection();
let query, insert, update, remove

await connect()
  .then((conn)=>{
    [query, insert, update, remove] = Provider(conn);
  })
  .catch((err)=>(console.log(err)));

export default {
  query,
  insert,
  update,
  remove,
  closeCon,
  connect
}
