document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.button'),
        wrap = document.querySelector('.wrap'),
        success_wrap = document.querySelector('.success-wrap'),
        form_input = document.querySelector('.form__input')
        isEmail = false;

    btns.forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault()
        if (isEmail) {
            wrap.classList.toggle('hide')
            success_wrap.classList.toggle('hide')
            form_input.value = ''
            form_input.classList.remove('is-valid')
        }
    }))

    form_input.addEventListener('input', (e) => {
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

let a = ''

a.includes