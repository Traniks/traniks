import {fadeIn} from "./func.js"

function mail() {
    $("form").submit(function(e) {
        e.preventDefault();

        // if (!$(this).valid()) {
        //     return;
        // }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            fadeIn(".overlay");
            fadeIn("#thanks");

            $("form").trigger("reset");
        });
        console.log("Форма отправлена");
        return false;
    });
}

export default mail;