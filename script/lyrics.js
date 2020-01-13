$(function() {
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from the top of the browser window
            $(".fixed-top").css("background-color", "#000");
        } else {
            $(".fixed-top").css("background-color", "transparent");
        }
    })
})

// pure javascript
// var fixedTop = document.querySelector(".fixed-top");
// window.onscroll = function() {
//     "use strict";
//     if (document.body.scrollTop >= 200) {
//         this.fixedTop.classList.add("navbar-dark");
//         this.fixedTop.classList.remove("bg-transparent");
//     } else {
//         this.fixedTop.classList.add("bg-transparent");
//         this.fixedTop.classList.remove("navbar-dark");
//     }
// }