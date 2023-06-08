import {fadeOut} from "./func.js"

function modal() {
    const crosses = document.querySelectorAll(".modal__close");
    crosses.forEach(elem => {
        elem.addEventListener("click", () => {
            fadeOut(".overlay");
            fadeOut("#thanks");
        });
    });
}

export default modal;