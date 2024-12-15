
// PRELOAD
$('body').attr('style', 'overflow:hidden; background-color: #ff00000f')
$(window).on("load", function () {
  $('body').attr('style', 'overflow-y: scroll; background-color: #ff00000f')
  $('.loader').delay(800).fadeOut(400)
})