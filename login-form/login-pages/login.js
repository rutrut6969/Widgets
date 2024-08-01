// Show hidden Password
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)
    
    iconEye.addEventListener('click', () => {
    // Change password to text
    if(input.type === 'password'){
        // Switch to text
        input.type = 'text'

        // Icon Change
        iconEye.classList.add('ri-eye-line')
        iconEye.classList.remove('ri-eye-off-line')
    }
    else if(input.type === 'text'){

        // Change Type back
        input.type = 'password'

        // Icon Change Back
        iconEye.classList.add('ri-eye-off-line')
        iconEye.classList.remove('ri-eye-line')
    }
    else {
        alert('No Type Specified')
    }
})
}

showHiddenPass('login-pass', 'login-eye')
