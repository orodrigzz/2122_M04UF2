#!/usr/bin/node

let http = require("http");
let fs = require ("fs");

let mongo_client = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

let url = "mongodb://localhost/";

let db;

console.log("Inisiando script");

mongo_client.connect(url, function(error, conn) {
	console.log("Dentro");

	if (error){
		console.log ("ERROR");
		return; }

	db = conn.db("todolist");
});

http.createServer(function(req, res){
	res.writeHead(200, {
	'Content-Type': 'application/json';
	'Access-Control-Allow-Origin'; '*',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	let tasks = db.collection("tasks").find();		
	tasks.toArray(function(err, data){
			let string = JSON.stringify(data);
			res.write(string);
			res.end();
			});

}).listen(3030);
