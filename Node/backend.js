/*En cmd hacer lo siguiete een la carpeta donde 
 estara ubicado el archivo .js de servidor

 npm install -g express 
 ó
 npm install express

 para uso de llamado a servidor por post
 npm isntall body-parser
*/

var baseDatos={usuario:"willys",password:"key"};

var pepito="Casa";
console.log("Arrancando server de Node");

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded({extended: true}));
var servidor;

servidor = web.listen(8080, function  () {
	console.log("servidor arrancado");
});

web.get("/",function (req,res) {
	res.sendfile("formulario.html");
});

web.post("/entrar",function (req,res) {
	//console.log(req.body);
	//res.send("Entraste al formulario");
	if(req.body.usuario == baseDatos.usuario && 
		req.body.clave == baseDatos.password)
	{
		res.send("Has entredado!!!");
	}
	else
	{
		res.send("Shuu Shuuu!! fuera de aqui!!");
	}
});


//Pruebas de URL
web.get("/test", function (req,res) {
	//console.log(req);
	//res.send("Buen trabajo, lograste un servidor web desde "
	//	+pepito);
	res.send("Tu avion es "+req.query.avion+" y tu edad es "+
		req.query.edad);
});

web.get("/hola/mama-es-linda", function (req,res) {
	res.send("Hola <strong>mamá</strong>, estoy triunfando!!!");
});






