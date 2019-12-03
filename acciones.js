//JavaScript Document

$(document).ready(function(e){
	varcitas=[];
	$('#enviar').on('click',function(){
		$.when($.post("http://192.18.4.34/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(),password: $('#pass').val()})).then(
		
		function exito(datos) {
		alert (datos);	
		},
		function error(){
		alert ("error no se puede alcanzar el sevidor");	
		}		
		);//THEN WHEN
	}); //ENVIAR
});
