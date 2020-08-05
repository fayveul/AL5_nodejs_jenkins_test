console.log("index.js présent");

document.querySelectorAll('input[type="button"]')[0].addEventListener("click", (evt)=>{
    console.log("click sur le bouton !");
    var inputNom = document.querySelectorAll('input[type="text"]')[0].value;
    var tabJS = {"nom":inputNom};
    console.log("JSON.stringify(tabJS) : "+JSON.stringify(tabJS));
    makeAjaxPostRequest("/insererNom", JSON.stringify(tabJS) , function(stringJson){
		console.log("stringJson : "+stringJson);
		tabJavascript = JSON.parse(stringJson);
		document.querySelectorAll('#reponseServeur span')[0].innerHTML = tabJavascript.nom;
	});
}, false);