$(document).ready(function(){
	$(document).on("click",".fermer",function(){
		$("#header").addClass("vueMenu");
		$("#menu").addClass("ouvert");
		$("#header").removeClass("invisible");
		$("#menu").removeClass("fermer");	
	});
	$(document).on("click",".ouvert",function(){
		console.log("coucou");
		$("#header").addClass("invisible");
		$("#menu").addClass("fermer");
		$("#header").removeClass("vueMenu");
		$("#menu").removeClass("ouvert");
	});
	
});
