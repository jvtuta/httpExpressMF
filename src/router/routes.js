export default [
  {
    path: "/",
    method: "get",
    handler: (await import("../app/controllers/IndexController.js")).default,
  },
];
