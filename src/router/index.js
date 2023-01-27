import { Router } from "express";
import routes from "./routes.js";

const router = Router();

routes.map((route) => {
  const { path, method, handler } = route;
  router[method](path, handler);
});

router.use("/api", router);


export default router;
