// template_sfrju1r
// service_661qfez
// 6yp0uhSHEqTHXa9i0

function contact(event) {
    event.preventDefault ();

    const loading = document.querySelector ('.modal__overlay--loading');
    const success = document.querySelector ('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
           'service_661qfez'
         'template_sfrju1r'
          event.target,
           '6yp0uhSHEqTHXa9i0'
        ) .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }
    ) .catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The email service is temporarily unavailable. Please contact me directly at jessicaleecsi@yahoo.com"
        );
    }
    )
}
