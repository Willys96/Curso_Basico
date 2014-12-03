
var tablero;
var generico;
var generico2;
var Blok1;
var Blok2;
var Blok3;


function bloque (x,y,w,h)
{
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
}

var teclas = {
	up:38,
	down:40,
	left:37,
	right:39
};

var imgFondo;
var imgDiana;


function fondo(url)
{
	this.imagen = new Image();
	this.imagen.src = url;
	this.imagen.onload = dibujarFondo;
	generico = this;

	this.dibujar = function(){
		this.imagen.src = this.url;
    	generico = this;
	};
}

function personaje(url,path)
{
	this.imagen = new Image();
	this.path = path;
	this.imagen.src = url;
	this.imagen.onload = dibujarPersonaje;
	this.x = 0;
	this.y = 0;
	generico2 = this;

	this.dibujar = function(){		
		this.imagen.src = this.url;
    	generico2 = this;
	};
}

function inicio()
{
	var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    Blok1 = new bloque(0,200,150,50);
    Blok2 = new bloque(200,0,50,250);
    Blok3 = new bloque(150,350,350,50);


    imgFondo = new fondo("fondo.png");    
    imgDiana= new personaje("diana-frente.png","down");

    document.addEventListener("keydown",teclado);

}

function dibujarFondo()
{
    tablero.drawImage(generico.imagen, 0, 0);    
    generico = null;
}

function dibujarPersonaje()
{

	if(generico2.path=="down")
	{
		generico2.y=generico2.y+10;
	}
	else if(generico2.path=="up")
	{
		generico2.y=generico2.y-10;
	}
	else if(generico2.path=="left")
	{
		generico2.x=generico2.x-10;
	}
	else if(generico2.path=="right")
	{
		generico2.x=generico2.x+10;
	}

	tablero.drawImage(generico2.imagen, generico2.x, generico2.y);    

	if!(validacion_bloque(generico2,Blok1) && validacion_bloque(generico2,Blok1) && validacion_bloque(generico2,Blok1))
	{
		alert("PONIG!!!!!!");
	}

    generico2 = null;
    
}

function validacion_bloque(obj,blok)
{
	var ok=true;

	

	return ok;
}

function teclado(evento)
{
	var codigo = evento.keyCode;

	imgFondo.url="";   
	imgFondo.dibujar();

	imgDiana.url="";    	
	imgDiana.dibujar();

	imgFondo.url="fondo.png";   
	imgFondo.dibujar();


	if(codigo==teclas.down)
	{
    	imgDiana.url="diana-frente.png";    	
    	imgDiana.path="down";    	
    	imgDiana.dibujar();
	}

	if(codigo==teclas.up)
	{
    	imgDiana.url="diana-atras.png";
    	imgDiana.path="up";
    	imgDiana.dibujar();
	}

	if(codigo==teclas.left)
	{
    	imgDiana.url="diana-izq.png";
    	imgDiana.path="left";
    	imgDiana.dibujar();
	}

	if(codigo==teclas.right)
	{
    	imgDiana.url="diana-der.png";
    	imgDiana.path="right";
    	imgDiana.dibujar();
	}
}