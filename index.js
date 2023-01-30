import express from "express";
import router from "./src/router/index.js";
import Db from "./src/database/index.js";


await Db.connect();

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
  Db.query("select * from users")
    .then((result) => {
      console.log(result)
    })
});







