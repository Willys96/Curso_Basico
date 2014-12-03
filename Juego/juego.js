
var tablero;
var generico;
var generico2;

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
	var ver = document.getElementById("caja");

    tablero = canvas.getContext("2d");

    imgFondo = new fondo("fondo.png");    
    imgDiana= new personaje("diana-frente.png","");

    document.addEventListener("keydown",teclado);

}

function dibujarFondo()
{
    tablero.drawImage(generico.imagen, 0, 0);    
    generico = null;
}

function dibujarPersonaje()
{
	validacion_bloque();

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

    generico2 = null;
    
}


var ok="1";

function validacion_bloque()
{

	if(generico2.path=="down")
	{
		//Marco Inferior
		if(generico2.y+50+10>500)
		{
			generico2.path="";
		}

		//BLoque 1
		if(generico2.y+50+10>200 &&  generico2.x+10 <150  && generico2.y<250)
		{
			generico2.path="";			
		}

		//BLoque 3
		if(generico2.y+50+10>350 &&  generico2.x+10 >150  && generico2.y<400)
		{
			generico2.path="";			
		}
	}
	else if(generico2.path=="up")
	{
		//Marco Superior
		if(generico2.y-10<0)
		{
			generico2.path="";
		}

		//BLoque 1
		if(generico2.y-10<250 &&  generico2.x+10<150 && generico2.y+10>200)
		{
			generico2.path="";			
		}

		//BLoque 1
		if(generico2.y-10<400 &&  generico2.x+10>150 && generico2.y+10>350)
		{
			generico2.path="";			
		}
	}
	else if(generico2.path=="left")
	{
		//Marco Izquierdo
		if(generico2.x<0)
		{
			generico2.path="";
		}

		//BLoque 1
		if(generico2.y<250 &&  generico2.x+10<150 && generico2.y+50>200)
		{
			generico2.path="";			
		}

	}
	else if(generico2.path=="right")
	{
		//Marco Derecho
		if(generico2.x+50>500)
		{
			generico2.path="";
		}

		//BLoque 1
		if(generico2.y<400 &&  generico2.x>150 && generico2.y+50>350)
		{
			generico2.path="";			
		}
	}	
}

function teclado(evento)
{
	var codigo = evento.keyCode;


	if(codigo==teclas.down)
	{
		imgFondo.url="";   
		imgFondo.dibujar();

		imgDiana.url="";    	
		imgDiana.dibujar();

		imgFondo.url="fondo.png";   
		imgFondo.dibujar();

    	imgDiana.url="diana-frente.png";    	
    	imgDiana.path="down";    	
    	imgDiana.dibujar();
	}
	else if(codigo==teclas.up)
	{
		imgFondo.url="";   
		imgFondo.dibujar();

		imgDiana.url="";    	
		imgDiana.dibujar();

		imgFondo.url="fondo.png";   
		imgFondo.dibujar();

    	imgDiana.url="diana-atras.png";
    	imgDiana.path="up";
    	imgDiana.dibujar();
	}
	else if(codigo==teclas.left)
	{
		imgFondo.url="";   
		imgFondo.dibujar();

		imgDiana.url="";    	
		imgDiana.dibujar();

		imgFondo.url="fondo.png";   
		imgFondo.dibujar();

    	imgDiana.url="diana-izq.png";
    	imgDiana.path="left";
    	imgDiana.dibujar();
	}
	else if(codigo==teclas.right)
	{
		imgFondo.url="";   
		imgFondo.dibujar();

		imgDiana.url="";    	
		imgDiana.dibujar();

		imgFondo.url="fondo.png";   
		imgFondo.dibujar();

    	imgDiana.url="diana-der.png";
    	imgDiana.path="right";
    	imgDiana.dibujar();
	}
}