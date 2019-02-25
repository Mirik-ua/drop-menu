$(function(){
  var link = $(".menu");
  var wrapper = $(".wrapper");

  link.click(function(){
    link.toggleClass("menu-active");
    wrapper.toggleClass("wrapper-active");
  });
});
