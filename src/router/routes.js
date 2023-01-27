export default [
  {
    path: '/',
    method: 'get',
    handler: (req, res) => {
      res.send('Hello World!');
    }
  }
];
