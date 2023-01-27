import express from "express";
import router from "./src/router/index.js";
import dotenv from "dotenv";
import Db from "./src/database/index.js";

await Db.connect();
Db.query('SELECT * FROM users');



dotenv.config();



