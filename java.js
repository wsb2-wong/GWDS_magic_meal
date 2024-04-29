document.addEventListener("DOMContentLoaded", function() {
    var scrollEffectElements = document.querySelectorAll(".scroll-effect");
  
    function scrollAppear() {
      for (var i = 0; i < scrollEffectElements.length; i++) {
        var element = scrollEffectElements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (position < windowHeight - 100) {
          element.classList.add("scroll-appear");
        }
      }
    }
  
    window.addEventListener("scroll", scrollAppear);
  });