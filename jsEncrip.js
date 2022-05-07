function encriptar(){
	validar();
	var texto = document.querySelector("#area-texto").value;
	var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	document.querySelector("#area-encrip").value = textoCifrado;
	document.querySelector("#area-texto").value = "";
}

function desencriptar(){
	validar();
	var texto = document.querySelector("#area-texto").value;
	var textoDes = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.querySelector("#area-encrip").value = textoDes;
	document.querySelector("#area-texto").value = "";
}

function copiar(){
	var textoCopiado = document.querySelector("#area-encrip");
	textoCopiado.select();
	document.execCommand("copy");
}

function validar(){
	var texto = document.querySelector("#area-texto");
	var validacionTexto = /^[a-z]+(\s+[a-z]+)*$/;
	var verificarTexto = new RegExp(validacionTexto);
	if (!verificarTexto.test(texto.value)){
		texto.style.color = "#F00";
		document.querySelector(".leyenda").style.color = "#F00";
		document.querySelector("#botonEncriptador") = null;
		document.querySelector("#botonDesencriptador") = null;
	}
	else{
		texto.style.color = "#000";
		document.querySelector(".leyenda").style.color = "#000";
	}
}

var bttnEncrip = document.querySelector("#botonEncriptador");
bttnEncrip.onclick = encriptar;

var bttnDesencrip = document.querySelector("#botonDesencriptador");
bttnDesencrip.onclick = desencriptar;

var bttnCopiar = document.querySelector("#botonCopiar");
bttnCopiar.onclick = copiar;

