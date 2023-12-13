const navbarToggle = navbar.querySelector("#navbar-toggle"); //A navbár toggle gombja
const navbarMenu = document.querySelector("#navbar-menu"); //A navbar menüje
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links"); //A navbar menüjének linkei
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true"; //A navbar kinyitottságának állapota

const toggleNavbarVisibility = () => { //A navbar kinyitását és bezárását végző függvény
  isNavbarExpanded = !isNavbarExpanded; //A navbar kinyitottságának állapotát megfordítja
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded); //A navbar toggle gombjának aria-expanded attribútumát beállítja a navbar kinyitottságának állapotára
};

navbarToggle.addEventListener("click", toggleNavbarVisibility); //A navbar toggle gombjának click eseményére a toggleNavbarVisibility függvényt rendeli

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation()); //A navbar menüjének linkeire a click eseményre a buborékozás megállítását rendeli
navbarMenu.addEventListener("click", toggleNavbarVisibility); //A navbar menüjére a click eseményre a toggleNavbarVisibility függvényt rendeli
document.addEventListener("click", () => { //A dokumentumra a click eseményre a következő függvényt rendeli
  if (isNavbarExpanded) { //Ha a navbar kinyitott állapotban van
    toggleNavbarVisibility(); //A navbar kinyitását és bezárását végző függvényt hívja meg
  }
});
