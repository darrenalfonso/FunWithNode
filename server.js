var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

//Setup the view engine
//app.set("view engine", "jade");
app.set("view engine", "vash");

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);

app.get("/api/users", function(req, res) {
	res.set("Content-Type", "application/json");
	res.send({ name: "Darren", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);