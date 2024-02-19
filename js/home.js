/*$(window).scroll(function() {
  
    if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky");
    } else {
      $('header').removeClass("sticky");
    };
  });*/

  document.addEventListener('DOMContentLoaded', function () {

    ///<<<<<<<<<<<<<<<<<>>>>>>Header Scroll>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
    //<<<<<<<<<<<<<<<<<<<<<<<Header Bar Choose>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   
      const btn = document.querySelector(".bar-nav");
      const nav = document.querySelector("");

      btn.addEventListener("click", function(){
        if(nav.classList.contains("open")){
          nav.classList.remove("open");
        }else{
          nav.classList.add("open");
          console.log("aqui")
        }
      })

});
