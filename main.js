var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    if (prevScrollpos >= currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.backgroundColor = "white";
    } else {
        navbar.style.top = "-100px";
        if (currentScrollPos === 0) {
            navbar.style.backgroundColor = "white";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    }
    prevScrollpos = currentScrollPos;
}
