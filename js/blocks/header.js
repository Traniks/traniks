function header() {

    // header list and hamburger
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__list-item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__list_active');
        })
    })

}

export default header;
