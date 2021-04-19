$(document).ready(function () {
    $("#design").click(function () {
      $(".toggle1").toggle();
      $("#design").toggle();
    });
    $("#dev").click(function () {
      $("#dev").toggle();
      $(".toggle2").toggle();
    });
    $("#manage").click(function () {
        $(".toggle3").toggle();
        $("#manage").toggle();
      });
    $(".toggle1").click(function () {
      $(".toggle1").toggle();
      $("#design").toggle();
    });
    $(".toggle2").click(function () {
      $("#dev").toggle();
      $(".toggle2").toggle();
    });
    $(".toggle3").click(function () {
      $(".toggle3").toggle();
      $("#manage").toggle();
    });

    $(".project1").mouseover(function(){
        $("#project1").show();
      })
      .mouseout(function(){
        $("#project1").hide();
      })
      $(".project2").mouseover(function(){
        $("#project2").show();
      })
      .mouseout(function(){
        $("#project2").hide();
      })
      $(".project3").mouseover(function(){
        $("#project3").show();
      })
      .mouseout(function(){
        $("#project3").hide();
      })
      $(".project4").mouseover(function(){
        $("#project4").show();
      })
      .mouseout(function(){
        $("#project4").hide();
      })
      $(".project5").mouseover(function(){
        $("#project5").show();
      })
      .mouseout(function(){
        $("#project5").hide();
      })
      $(".project6").mouseover(function(){
        $("#project6").show();
      })
      .mouseout(function(){
        $("#project6").hide();
      })
      $(".project7").mouseover(function(){
        $("#project7").show();
      })
      .mouseout(function(){
        $("#project7").hide();
      })
      $(".project8").mouseover(function(){
        $("#project8").show();
      })
      .mouseout(function(){
        $("#project8").hide();
      })
  });
   