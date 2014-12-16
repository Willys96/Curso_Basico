var hombre;
var palabra="anglosajon";
var espacio= new Array(palabra.length);

var Ahorcado = function  (con) 
{
	this.contexto = con;	
	this.vivo = true;	
	this.numIntentos = 0;
	this.maxNumIntentos =5;
};

Ahorcado.prototype.dibujar = function() 
{
	var dibujo =this.contexto;
	
	//Marco
	dibujo.beginPath();
	dibujo.moveTo(0,0);
	dibujo.lineTo(0,400);
	dibujo.lineTo(500,400);
	dibujo.lineTo(500,0);
	dibujo.lineTo(0,0);
	dibujo.strokeStyle="black";
	dibujo.lineWidth=10;
	dibujo.stroke();
	dibujo.closePath;


	//Poste	
	dibujo.beginPath();
	dibujo.moveTo(200,100);
	dibujo.lineTo(200,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.moveTo(200,350);
	dibujo.lineTo(450,350);
	dibujo.strokeStyle="green";
	dibujo.lineWidth=5;
	dibujo.stroke();
	dibujo.closePath;

	if(this.numIntentos>0)
	{
		//Cabeza	
		dibujo.beginPath();
		dibujo.arc(200,140,40,0,Math.PI * 2, false);
		dibujo.strokeStyle="red";
		dibujo.lineWidth=5;
		dibujo.stroke();
		dibujo.closePath;

		if(this.numIntentos>1)
		{
			//Torso	
			dibujo.beginPath();
			dibujo.moveTo(200,180);
			dibujo.lineTo(200,250);
			dibujo.strokeStyle="red";
			dibujo.lineWidth=5;
			dibujo.stroke();
			dibujo.closePath;

			if(this.numIntentos>2)
			{
				//Brazos
				dibujo.beginPath();
				dibujo.moveTo(170,240);
				dibujo.lineTo(200,180);
				dibujo.lineTo(230,240);
				dibujo.strokeStyle="red";
				dibujo.lineWidth=5;
				dibujo.stroke();
				dibujo.closePath;

				if(this.numIntentos>3)
				{
					//Piernas
					dibujo.beginPath();
					dibujo.moveTo(170,310);
					dibujo.lineTo(200,250);
					dibujo.lineTo(230,310);
					dibujo.strokeStyle="red";
					dibujo.lineWidth=5;
					dibujo.stroke();
					dibujo.closePath;

					if(this.numIntentos>4)
					{
						//Ojos
						dibujo.beginPath();

						//Ojo Izquierdo
						dibujo.moveTo(170,130);
						dibujo.lineTo(190,150);
						dibujo.moveTo(190,130);
						dibujo.lineTo(170,150);

						//Ojo derecho
						dibujo.moveTo(210,130);
						dibujo.lineTo(230,150);
						dibujo.moveTo(230,130);
						dibujo.lineTo(210,150);

						dibujo.strokeStyle="blue";
						dibujo.lineWidth=5;
						dibujo.stroke();
						dibujo.closePath;
					}
				}
			}
		}
	}
};

Ahorcado.prototype.trazar = function() 
{
	this.numIntentos++;

	if(this.numIntentos >= this.maxNumIntentos)
	{
		this.vivo=false;
		alert("Has perdido!!!")
	}

	this.dibujar();
	
};

function inicio () 
{
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;

	hombre = new Ahorcado(canvas.getContext("2d"));
	hombre.dibujar();

	var boton=document.getElementById("boton");
	var l=document.getElementById("pista");

	boton.addEventListener("click","agregarLetra");

	l.innerText="";

	for(p in palabra)
	{
		l.innerText+=" _";
	}
}

function agregarLetra () 
{
	var l=document.getElementById("letra");
	var letra=l.value;

	for(p in palabra)
	{

	}
}