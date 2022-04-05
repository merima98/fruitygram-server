const jsonServer = require('json-server');
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.db = router.db;

server.use(auth);
server.use(router);
server.listen(3500)