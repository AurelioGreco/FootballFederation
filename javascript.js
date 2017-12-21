/* JavaScript - Federación Italiana de Fútbol */

/* Para cambiar el fondo de cada página web */

function cambiofondo(numero) {
	if (numero==1) {
		document.body.style.background="url('imagen/fondo1.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==2) {
		document.body.style.background="url('imagen/fondo2.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==3) {
		document.body.style.background="url('imagen/fondo3.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==4) {
		document.body.style.background="url('imagen/fondo4.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==5) {
		document.body.style.background="url('imagen/fondo5.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==6) {
		document.body.style.background="url('imagen/fondo6.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==7) {
		document.body.style.background="url('imagen/fondo7.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==8) {
		document.body.style.background="url('imagen/fondo8.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else if (numero==9) {
		document.body.style.background="url('imagen/fondo9.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}else {
		document.body.style.background="url('imagen/fondo10.jpg') no-repeat fixed center top";
		document.body.style.backgroundSize="cover";
	}
}

/* Para: registrar.html */

function Todos(all) {
			for (var a=1; a<=5; a++) {
				if (all){
					document.getElementById(a).checked = true;
				} else {
						document.getElementById(a).checked = false;
					}
			}
}