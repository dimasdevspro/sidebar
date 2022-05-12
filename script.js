
const sidebar = {
    moving(){
        document
        .querySelector('.navbar')
        .classList.toggle('nav_extended');
        document
        .querySelector('.menu_logo')
        .classList.toggle('menu_logo_at_right');
        document
        .querySelector('.logo')
        .classList.toggle('logo_visible');
        document
        .querySelector('.search')
        .classList.toggle('search_extended');
        document
        .querySelector('.menubuttons')
        .classList.toggle('pvisible');
        document
        .querySelector('.logout')
        .classList.toggle('logout_extended');
        document
        .querySelector('.logout_avatar')
        .classList.toggle('logout_avatar_visible')
            }
            
}

