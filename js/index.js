import validate from "./blocks/validate.js";
import modal from "./blocks/modal.js";
import header from "./blocks/header.js";

window.addEventListener('DOMContentLoaded', () => {

    new WOW().init();
    validate();
    modal();
    header();

})