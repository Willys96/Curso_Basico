var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

if(localStorage.getItem("autoSave"))
{
	$titulo.val(sessionStorage("titulo"));
	$url.val(sessionStorage("url"));
}


var id = setInterval(function () {
	sessionStorage.setItem("titulo",$titulo.val());
	sessionStorage.setItem("url",$url.val());
},1000); 

function mostrarFormulario(){
	$form.slideToggle()
	$list.slideToggle()
	return false;
}

function agregarPost () {
	var url = $url.val(),
<<<<<<< HEAD
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find(".titulo_item a")
		.text (titulo)
		.attr("href",url); //attr: indica atributo

	$clone.hide();

	$list.prepend($clone);//prepend: agrega elemento como primer elemento al que se le eadicoina

	$clone.fadeIn();//Genera animación de visualización

	$form.slideToggle();//Toggle de diasplay:none; y display:block;
	$list.slideToggle();

	$titulo.val("");
	$url.val("");
=======
		titulo = $titulo.val(),//val() captura ek valor -value-
		$clone = $post.clone();

	$clone.find(".titulo_item a") //Busca y adopta las propiedades del control que se busca
		.text(titulo)
		.attr("href",url);

	$clone.hide();

	$list.prepend($clone);//Agrega un control como primer elemento de list

	$clone.fadeIn();//lleva a cabo la animación 

>>>>>>> origin/master

	return false;//Evita el refresco de la ventana
}

//Eventos
$button.click(mostrarFormulario)

$form.on("submit",agregarPost);


/**********************************************//*
Mis Apuntes
/**********************************************/

//SessionStorage y LocalStorage
//var ls = localStorage
//var ss = sessionStorage

/*La información sessionStorage esta disponible unicamente
  minetras estuviere abierto, es decir, cerramos nuestro navegador
  (cierre de secion), esta información se pierde*/
//ss.setItem("nombre","pablo");
//console.log(ss);

//ss["apellido"]="rigazzi";
//console.log(ss);

//ss.edad = 35;
//console.log(ss);

/*La información localStorage esta disponible siempre
  independientemente de si cerramos nuestro navegador
  (cierre de secion)
  Esta información toma siempre 5M de espacio en disco
  */

//ls.key(0) //Me indica el nombre del elemento guardado en la posiscion 0
//ls.getItem("nombre") //Me indica el valor alojado en el elemento "nombre"

var leonidas = '{"nombre":"leonidad","apellido":"esteban","edad":23,"evaluacion":9.77}';
var obj_leon = JSON.parse(leonidas);//Convierte una cadena de texto JSON en un objeto
var txt = JSON.stringify(obj_leon);//Convierte un objeto en una cadena de texto JSON
