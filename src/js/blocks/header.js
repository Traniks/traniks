function header() {

    // header list
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

    //header fixed
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (scrollY > 600) {
            header.classList.add("header_fixed");
        } else {
            header.classList.remove("header_fixed");
        }
    })

}

export default header;
