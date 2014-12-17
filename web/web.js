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
	var url=
	return false;//Evita el refresco de la ventana
}

//eventos
$button.click(mostrarFormulario)

$form.on("submit",agregarPost);