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

    //header sticky
    const header = document.querySelector(".header");
    const sticky = header.offsetTop;
    const projects = document.querySelector(".projects");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= sticky) {
            header.classList.add("header_sticky");
            projects.classList.add("projects_sticky");
        } else {
            header.classList.remove("header_sticky");
        }
    })

}

export default header;
