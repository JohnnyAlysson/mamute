/* Toggle between adding and removing the "responsive" class to menu when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }