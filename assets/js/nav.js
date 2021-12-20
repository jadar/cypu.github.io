
/* Toggle between adding and removing the "expanded" class to topnav when the user clicks on the icon */
function toggleNavigation() {
  var x = document.getElementById("top-nav");
  if (x.className === "site-nav") {
    x.className += " expanded";
  } else {
    x.className = "site-nav";
  }
}
