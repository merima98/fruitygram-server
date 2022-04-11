const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3500;

server.db = router.db;

server.use(cors());
server.use(auth);
server.use(router);
server.listen(port);
