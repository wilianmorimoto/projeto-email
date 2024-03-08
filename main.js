function submit() {
    const email = document.querySelector('#email')
    const txt = '@'
    const errorMsg = document.querySelector('#error-msg')
    if(email.value.includes(txt)) {
        errorMsg.classList.remove('error')
        email.classList.remove('error')
    } else {
        errorMsg.classList.add('error')
        email.classList.add('error')
        email.focus()
        email.value = ''
    }
}