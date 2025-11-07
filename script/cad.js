const form = document.getElementById('formulario');
const inputs = form.querySelectorAll('input:not([type="submit"])');
const messages = form.querySelectorAll('.msg');
const signin = document.querySelector('#signin');
const price = document.querySelector('#price');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach((input, index) => {
        const value = input.value.trim();
        const message = messages[index];
        let errorMsg = '';

        if (value === '') {
            errorMsg = `${input.placeholder} cannot be empty`;
        }
        else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errorMsg = "Looks like this is not an email";
        }
        if (errorMsg) {
            input.classList.add('error');
            input.classList.remove('success');
            message.textContent = errorMsg;
            valid = false;
        }
        else {
            input.classList.add('success');
            input.classList.remove('error');
            messages.textContent = '';
        }
    });

    if (valid) {
        removerErro();
        alert('Form submitted');
        form.reset();
        inputs.forEach(input => input.classList.remove('success'));
    } 
    else {
        mostrarErro();
    }
});

function mostrarErro() {
    signin.classList.add('error-active');
    price.classList.add('error-active');
}

function removerErro() {
    signin.classList.remove('error-active');
    price.classList.remove('error-active');
}

inputs.forEach((input,index) => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.remove('error');
            messages[index].textContent = '';
        }
    });
});