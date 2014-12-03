
var tablero;
var generico;
var generico2;

var teclas = {
	up:38,
	down:40,
	left:37,
	right:39
};

var imgFondo;a
var imgDiana;


function fondo(url)
{
	this.imagen = new Image();
	this.imagen.src = url;
	this.imagen.onload = dibujarFondo;
	generico = this;
}

function personaje(url,path)
{
	this.imagen = new Image();
	this.path = path;
	this.imagen.src = url;
	this.imagen.onload = dibujarPersonaje;
	this.x=0;
	this.y=0;
	generico2 = this;

	document.addEventListener("keydown",teclado);
}



function inicio()
{
	var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");
    imgFondo = new fondo("fondo.png");
    imgDiana= new personaje("diana-frente.png","down");

}

function dibujarFondo()
{
    tablero.drawImage(generico.imagen, 0, 0);    
    generico = null;
}

function dibujarPersonaje()
{
	tablero.drawImage(generico2.imagen, 0, 0);    
    generico2 = null;
}

function teclado(evento)
{
	var codigo = evento.keyCode;
	
	if(codigo==teclas.down)
	{
		imgFondo = new fondo("fondo.png");
    	imgDiana= new personaje("diana-frente.png","down");
	}

	if(codigo==teclas.up)
	{
		imgFondo = new fondo("fondo.png");
    	imgDiana= new personaje("diana-atras.png","down");
	}

	if(codigo==teclas.left)
	{
		imgFondo = new fondo("fondo.png");
    	imgDiana= new personaje("diana-izq.png","down");
	}

	if(codigo==teclas.right)
	{
		imgFondo = new fondo("fondo.png");
    	imgDiana= new personaje("diana-der.png","down");
	}
}