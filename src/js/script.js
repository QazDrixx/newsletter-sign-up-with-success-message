document.addEventListener('DOMContentLoaded', () => {
    let wrap = document.querySelector('.wrap'),
        success_wrap = document.querySelector('.success-wrap'),
        form_input = document.querySelector('.form__input'),
        success_message = document.querySelector('.success-message'),
        dismiss_button = document.querySelector('.dismiss__button'),
        form = document.querySelector('.form'),
        isEmail = false;

    function changeMessage () {
        if (isEmail) {
            wrap.classList.toggle('hide')
            success_wrap.classList.toggle('hide')
            success_message.innerHTML = `A confirmation email has been sent to <b>${form_input.value}</b> Please open it and click the button inside to confirm your subscription.`
            form_input.value = ''
            form_input.classList.remove('is-valid')
            isEmail = false;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        changeMessage()
    })

    dismiss_button.addEventListener('click', () => {
        isEmail = true;
        changeMessage()
    })

    form_input.addEventListener('input', (e) => {
        isEmail = false;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form_input.value)) {
            form_input.classList.add('is-invalid')
            isEmail = false
        }
        else {
            form_input.classList.remove('is-invalid')
            form_input.classList.add('is-valid')
            isEmail = true
        }
    })
})