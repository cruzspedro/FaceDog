var menu_perfil = document.getElementById("menu_perfil");
var acessibility_menu = document.getElementById("menu-doido");
var high_contrast_btn = document.getElementById("high-contrast-btn");
var bate_papo_menu = document.getElementById("menu-bate-papo");
var imp_links_bate_papo = document.getElementById("imp-links-bate-papo");
var toggle = false;
const root = document.querySelector(':root')

function toggleImg() {
    if (toggle == false) {
        document.getElementById("market-place-logo").src  = "res/market-place-dark.png";
    }
    else {
        document.getElementById("market-place-logo").src  = "res/market_place.png";
    }
    toggle = !toggle;
}

function menuacessibilidade(){
    acessibility_menu.classList.toggle("acessibility-menu-height");
}

high_contrast_btn.onclick = function(){
    high_contrast_btn.classList.toggle("high-contrast-btn-on");
    document.body.classList.toggle("dark-theme");
    toggleImg();
}

function toggleBatePapo(){
    bate_papo_menu.classList.toggle("right-sidebar-none");
    imp_links_bate_papo.classList.toggle("imp-links-bate-papo-none");
}

function diminuirFonte(){
    var x_large = getComputedStyle(root).getPropertyValue('--x-large').slice(0, -2);
    var large = getComputedStyle(root).getPropertyValue('--large').slice(0, -2);
    var medium = getComputedStyle(root).getPropertyValue('--medium').slice(0, -2);
    var small = getComputedStyle(root).getPropertyValue('--small').slice(0, -2);
    root.style.setProperty('--x-large', --x_large + 'px'); 
    root.style.setProperty('--large', --large + 'px'); 
    root.style.setProperty('--medium', --medium + 'px'); 
    root.style.setProperty('--small', --small + 'px'); 
}

function aumentarFonte(){
    var x_large = getComputedStyle(root).getPropertyValue('--x-large').slice(0, -2);
    var large = getComputedStyle(root).getPropertyValue('--large').slice(0, -2);
    var medium = getComputedStyle(root).getPropertyValue('--medium').slice(0, -2);
    var small = getComputedStyle(root).getPropertyValue('--small').slice(0, -2);
    root.style.setProperty('--x-large', ++x_large + 'px'); 
    root.style.setProperty('--large', ++large + 'px'); 
    root.style.setProperty('--medium', ++medium + 'px'); 
    root.style.setProperty('--small', ++small + 'px'); 
}

function menuPerfil(){
    menu_perfil.classList.toggle("menu-perfil-height");
}

function finalizarCompra(){
    alert("Compra realizada");
    location.href='index.html';
}