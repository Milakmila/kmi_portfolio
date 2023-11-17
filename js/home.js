/*$(window).scroll(function() {
  
    if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky");
    } else {
      $('header').removeClass("sticky");
    };
  });*/

  document.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('.kmi-header');
    let scrolling = false;

    window.addEventListener('scroll', (event) => {
        scrolling = window.scrollY > 0;

        if (scrolling) {
            console.log("It is true");
            header.classList.add("sticky");
        } else {
            console.log("It is false");
            header.classList.remove("sticky");
        }
    });
});
