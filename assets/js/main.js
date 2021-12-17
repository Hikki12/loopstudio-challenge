const navburger = document.getElementById('nav-burger');
const navitems = document.getElementById('nav-items');
let burgerStatus = false;
navburger.addEventListener('click', () => {
    burgerStatus = !burgerStatus;
    if (burgerStatus) {
        navitems.style = "visibility: visible";
    }
    else{
        navitems.style = "visibility: hidden";
    }
});