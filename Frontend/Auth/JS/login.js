const togglePassword = document.getElementById('toggle-password');
if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        const password = document.getElementById('password');
        if (password.type === 'password') {
            password.type = 'text';
            togglePassword.textContent = 'visibility';
        } else {
            password.type = 'password';
            togglePassword.textContent = 'visibility_off';
        }
    });
}

const togglePasswordConfirm = document.getElementById('toggle-password-confirm');
if (togglePasswordConfirm) {
    togglePasswordConfirm.addEventListener('click', () => {
        const passwordConfirm = document.getElementById('password-confirm');
        if (passwordConfirm.type === 'password') {
            passwordConfirm.type = 'text';
            togglePasswordConfirm.textContent = 'visibility';
        } else {
            passwordConfirm.type = 'password';
            togglePasswordConfirm.textContent = 'visibility_off';
        }
    });
}

function validatePassword() {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    
    if (password) {
        // Validar longitud (mínimo 8)
        if (password.value.length < 8) {
            password.setCustomValidity('La contraseña debe tener al menos 8 caracteres');
        } else {
            password.setCustomValidity('');
        }
    }
    
    if (password && passwordConfirm) {
        // Validar si coinciden
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.setCustomValidity('Las contraseñas no coinciden');
        } else {
            passwordConfirm.setCustomValidity('');
        }
    }
}

// Añadir el evento de validación si los campos existen
const passInput = document.getElementById('password');
const confirmInput = document.getElementById('password-confirm');

if (passInput) {
    passInput.addEventListener('input', validatePassword);
}
if (confirmInput) {
    confirmInput.addEventListener('input', validatePassword);
}

