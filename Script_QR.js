var compteur = 0


$(document).ready(function () {

    $("#carrecompteur").html(compteur)
    $("#compteurb").click(function () {
        // $("#question").css("background-color","red");
        var question = prompt("entrer la question")
        var reponses = prompt("entrer la reponse")

        compteur++;


        $("#carrecompteur").html(compteur)
        $("#carre").append("<div class=\"qr1\">\n" +
            "        <label> Question : </label>\n" +
            "        <input disabled type=\"text\" class=\"question\">\n" +
            "\n" +
            "        <label>Reponse : </label>\n" +
            "\n" +
            "        <input disabled type=\"text\" class=\"reponse\" >\n" +

            "       <input class='bq' type=\"button\"   style='color:black' onclick='remove(this)' value='Supprimer'>\n" +
            "        <input type=\"button\"  class='br' style='color: black'  onclick='modify(this)' value='Modifier'>\n" +
            "    </div>")

        if (compteur > 1) {
            $(".question").last().val(question)
            $(".reponse").last().val(reponses)
        } else {
            $(".question").val(question)
            $(".reponse").val(reponses)
        }

    });

    $("#deleteb").click(function (){
       $(".qr1").remove();
       compteur=0;
        $("#carrecompteur").html(compteur)
    });


});


function remove(lechamp) {

    $(lechamp).parent("div").remove(); //on va selectionner le parent de la div pour sélectionner la div actuelle on l'on se trouve
    compteur--;
    $("#carrecompteur").html(compteur) //décrémentation du compteur

}

function modify(lechamp) {

    var question = prompt("quelle est la nouvelle question?");
    var reponse = prompt("quelle est la nouvelle reponse?");


    var questionr = $(lechamp).closest("div").css({ "border": "2px solid white"}).css({"border-radius": "50px;"});  //selection du parent le plus proche contenant une div
    questionr.children('.question').val(question)    //recherche de la classe .question puis changement de sa vlaue par la variable question
//ajout encore de .css
    var reponser = $(lechamp).closest("div").css({ "border": "2px solid green"}).css({"border-radius": "50px"});
    reponser.children('.reponse').val(reponse)

}





