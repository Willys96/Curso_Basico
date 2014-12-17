var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

function mostrarFormulario(){
	$form.slideToggle()
	return false;
}

function agregarPost () {
	var url = $url.val(),
		titulo = $titulo.val(),//val() captura ek valor -value-
		$clone = $post.clone();

	$clone.find(".titulo_item a") //Busca y adopta las propiedades del control que se busca
		.text(titulo)
		.attr("href",url);

	$clone.hide();

	$list.prepend($clone);//Agrega un control como primer elemento de list

	$clone.fadeIn();//lleva a cabo la animación 


	return false;//Evita el refresco de la ventana
}

//eventos
$button.click(mostrarFormulario)

$form.on("submit",agregarPost);