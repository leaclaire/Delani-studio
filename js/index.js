$(document).ready(function () {
    $("#design").click(function () {
      $(".toggle1").toggle();
      $("#design").toggle();
    });
    $("#dev").click(function () {
      $("#dev").toggle();
      $(".toggle2").toggle();
    });
    $(".toggle1").click(function () {
      $(".toggle1").toggle();
      $("#manage").toggle();
    });
    $(".toggle2").click(function () {
      $("#dev").toggle();
      $(".toggle2").toggle();
    });
    $(".toggle3").click(function () {
      $(".toggle3").toggle();
      $("#manage").toggle();
    });
    $(".toggle2").click(function () {
      $(".toggle2").toggle();
      $("#manage").toggle();
    });
  });