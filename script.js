// Title Fade

$(document).ready(function() {

        // run the fade() function every 2 seconds
        setInterval(function(){
          fade();
        },5000);
      
      
        // toggle between fadeIn and fadeOut with 0.3s fade duration.
        function fade(){
          $(".item").fadeToggle(1000);
        }
      
      });

// Fixed Navigation Bar

window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Navigation Dropdown

function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        }
        
window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                        if (myDropdown.classList.contains('show')) {
                                myDropdown.classList.remove('show');
                        }
        }
}
