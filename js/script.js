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
          $("#project-portfolio-btn").css("background-color", "background-color: rgba(100, 149, 237, .5)");
        }else{
          $("#project-portfolio-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-portfolio-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-phonebook-btn").click(function(){
        $("#project-phonebook-data").slideToggle();
        if($("#project-phonebook-data").is(":hidden")){
          $("#project-phonebook-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-phonebook-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-phonebook-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-blackjack-btn").click(function(){
        $("#project-blackjack-data").slideToggle();
        if($("#project-blackjack-data").is(":hidden")){
          $("#project-blackjack-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-blackjack-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-blackjack-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-cunit-btn").click(function(){
        $("#project-cunit-data").slideToggle();
        if($("#project-cunit-data").is(":hidden")){
          $("#project-cunit-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-cunit-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-cunit-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-dictionary-btn").click(function(){
        $("#project-dictionary-data").slideToggle();
        if($("#project-dictionary-data").is(":hidden")){
          $("#project-dictionary-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-dictionary-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-dictionary-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-student-btn").click(function(){
        $("#project-student-data").slideToggle();
        if($("#project-student-data").is(":hidden")){
          $("#project-student-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-student-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-student-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-calculator-btn").click(function(){
        $("#project-calculator-data").slideToggle();
        if($("#project-calculator-data").is(":hidden")){
          $("#project-calculator-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-calculator-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-calculator-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
    $("#project-library-btn").click(function(){
        $("#project-library-data").slideToggle();
        if($("#project-library-data").is(":hidden")){
          $("#project-library-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-library-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-library-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
    })
      $("#project-dscience-btn").click(function(){
        $("#project-dscience-data").slideToggle();
        if($("#project-dscience-data").is(":hidden")){
          $("#project-dscience-btn").css("background-color", "rgba(100, 149, 237, .5)");
        }else{
          $("#project-dscience-data").css("background-color", "rgba(228, 208, 10, .5)");
          $("#project-dscience-btn").css("background-color", "background-color: rgba(0, 255, 0, .5)");
        }
      })
});
