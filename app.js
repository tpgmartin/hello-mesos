var TASK_HOST = process.env.TASK_HOST;
var PORT0 = process.env.PORT0;

// Exit immediately if either TASK_HOST or PORT0 are not provided.
if (!TASK_HOST) { console.log("TASK_HOST not set"); process.exit(3); }
if (!PORT0)     { console.log("PORT0 not set"); process.exit(3); }

var server = new (require('hapi').Server)();
server.connection({host: TASK_HOST, port: PORT0});

server.route({method: "GET", path: "/", handler: function(request, reply) {
  reply("Hello, HAPI.\n");
}});

server.start(function(err) {
  if (err) { throw err; }
  console.log("Server running at:", server.info.uri);
});