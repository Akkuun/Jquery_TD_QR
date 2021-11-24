$(document).ready(function () {

    $("*").click(function () {
        alert("détournement du clic");
    });


    $("p").hover(function () {
        $(this).css("background-color", "red");
    });

    $(".rouge").hover(function () {
        $(this).css("background-color", "blue");
    });
    $("#rouge").hover(function () {
        $(this).css("background-color", "green");
    });
    $("span").click(function (e) {
        alert(e.which); //retourne 1 si le bouton gauche est pressé, 2 milieu
        alert(e.pageX); //retourne l'abscisse depuis le coin supérieur gauche
        alert(e.pageY); //retourne l'ordonnée depuis le coin supérieur gauche
        e.preventDefault(); //permettra d'annuler le submit dans un formulaire
    });
});



