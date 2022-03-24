function show_menu() {
    let menu = document.getElementById("menu");
    let menucheck = document.getElementById("menu-check");
    let checked = menucheck.checked;
    if (checked) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}; 

function remove_menu() {
    let menu = document.getElementById("menu");
    let menucheck = document.getElementById("menu-check");
    menu.style.display = 'none';
    menucheck.checked = false;
}
