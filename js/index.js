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
      }),
      .mouseout(function(){
        $("#project1").hide();
      });
  });
   