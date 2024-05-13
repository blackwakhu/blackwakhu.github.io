$( document ).ready(function() {
    $(".aboutbtn").click(function(){
      $("#home").hide();
      $("#about").slideDown(850);
      $("#skills").hide();
      $("#projects").hide()
    })
});
