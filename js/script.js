$( document ).ready(function() {
    $(".aboutbtn").click(function(){
      $("#home").hide();
      $("#about").slideDown(850);
      $("#skills").hide();
      $("#projects").hide()
    })
    $(".homebtn").click(function(){
      $("#about").hide();
      $("#home").slideDown(850);
      $("#skills").hide();
      $("#projects").hide()
    })
    $(".skillsbtn").click(function(){
      $("#home").hide();
      $("#skills").slideDown(850);
      $("#about").hide();
      $("#projects").hide()
    })
    $(".projectbtn").click(function(){
      $("#home").hide();
      $("#projects").slideDown(850);
      $("#skills").hide();
      $("#about").hide()
    })
    $("#project-portfolio-btn").click(function(){
        $("#project-portfolio-data").slideToggle();
        if($("#project-portfolio-data").is(":hidden")){
            
        }else{
            $("#project-portfolio-data").css("background-color", "yellow");
        }
    })
});
