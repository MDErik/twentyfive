let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

// Lånad kod nedanför

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
