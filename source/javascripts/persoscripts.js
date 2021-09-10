/*navbar shrink */

$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    $('.navbar-name').css("height", 60);
    $('.navbar-name-brand img').css("height", 54)
  } else {
    $('.navbar-name').css("height", 90);
    $('.navbar-name-brand img').css("height", 85)
  }
});
