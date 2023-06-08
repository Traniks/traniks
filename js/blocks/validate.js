function validate() {
    function validate_form(selector) {

        const validate = new JustValidate(selector, 
            {
                errorLabelCssClass: ['error'],
            }
        );
    
        validate.addField("input[name=name]", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
            {
                rule: 'customRegexp',
                value: /[A-Za-zА-Яа-яЁё]/,
                errorMessage: "Имя может содержать только [A-z] и [А-я]."
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: "Имя неможет состоять из одной буквы."
            },
        ])
        validate.addField("input[name=email]", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
            {
                rule: 'email',
                errorMessage: 'Почта должна состоять из @, .com, .ru и т.д в конце',
            },
        ])
        validate.addField("textarea", [
            {
                rule: 'required',
                errorMessage: "Это поле обязательно.",
            },
        ])
    }
    
    validate_form("#form_1");
}

export default validate;