$( document ).ready(function() {
    $(".skillsbtn").click(function(){
        $("#home").hide();
        $("#skills").show(800);
    })
    $(".aboutbtn").click(function(){
        $("#home").hide();
        $("#about").show(800);
        $("#skills").hide();
    })
});
