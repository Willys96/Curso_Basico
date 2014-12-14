console.log("Iniciando server de Node");

//Drone Control Code
var arDrone = require("ar-drone");
var drondinez = arDrone.createClient(); 

function bateria () {
	console.log("Bateria: "+ drondinez.battery());
}

function despegar_drone () 
{
	drondinez.config("control:altitude_max",100000);
	drondinez.takeoff();
	rotar_drone();
	bateria();
}

function rotar_drone () 
{
	drondinez.stop();
	drondinez.calibrate(0);
	drondinez.up();
	bateria();
}

function aterrizar_drone () 
{
	drondinez.stop();
	drondinez.land();
	bateria();
}


//Express y Servidor Web
var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080,function () {
	console.log("Servidor Iniciado");	
});

web.get("/",function (req,res) { 
	console.log("Home");
	res.sendfile("opciones.html");
});

web.get("/despegar",function (req,res) {
	console.log("Despegando");
	despegar();
	res.sendfile("opciones.html");
});

web.get("/aterrizar",function (req,res) {
	console.log("Aterrizando");
	aterrizar_drone();
	res.sendfile("opciones.html");
});