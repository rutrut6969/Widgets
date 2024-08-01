const showHiddenPass = (signupPass, signupEye) => {
    const input = document.getElementById(signupPass),
        iconEye = document.getElementById(signupEye);
    iconEye.addEventListener('click', () => {
        if(input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        }
        else {
            input.type = 'password';
            iconEye.classList.add('ri-eye-off-line');
            iconEye.classList.remove('ri-eye-line')
        }
    })
}

showHiddenPass('password', 'signup-eye')
