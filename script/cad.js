const form = document.getElementById('formulario');
const inputs = form.querySelectorAll('input:not([type="submit"])');
const messages = form.querySelectorAll('.msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach((input, index) => {
        const value = input.value.trim();

        if (value === '') {
            input.classList.add('error');
            input.classList.remove('success');
            messages[index].textContent = `${input.placeholder} cannot be empty`;
            valid = false;
        }
        else if (input.type === 'email') {
            const emailValido = /\S+@\S+\.\S+/.test(value);
            if (!emailValido) {
                input.classList.add('error');
                input.classList.remove('success');
                messages[index].textContent = "Looks like this is not an email"
                valid = false;
            } else {
                input.classList.add('success');
                input.classList.remove('error');
                messages[index].textContent = '';
            }
        } 
        else {
            input.classList.add('success');
            input.classList.remove('error');
            messages[index].textContent = '';
        }
    });

    if (valid) {
        alert('form submitted');
        form.reset();
        inputs.forEach(input => input.classList.remove('success'));
    }
});