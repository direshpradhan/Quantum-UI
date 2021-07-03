/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "15rem";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("hamburger").style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("hamburger").style.display = "block";
}
