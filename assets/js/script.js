'use strict';

/**
 * navbar toggle
 */
let token = sessionStorage.getItem("token")
let signInNav = document.getElementById("signinnav");
if(token!=null && token!=""){
    signInNav.style.display = "none"
}
else{
  document.getElementById("hostnav").style.display=""
}
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});