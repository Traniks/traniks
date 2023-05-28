import validate from "./blocks/validate.js";
import modal from "./blocks/modal.js";

window.addEventListener('DOMContentLoaded', () => {

    new WOW().init();
    validate();
    modal();

})