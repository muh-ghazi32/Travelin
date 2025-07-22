document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const messageDiv = document.getElementById('message');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = usernameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            messageDiv.style.display = 'none';
            messageDiv.className = 'message'; 

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                displayMessage('Semua kolom harus diisi!', 'error');
                return;
            }

            if (password.length < 6) {
                displayMessage('Kata sandi minimal 6 karakter.', 'error');
                return;
            }

            if (password !== confirmPassword) {
                displayMessage('Kata sandi dan konfirmasi kata sandi tidak cocok.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                displayMessage('Format email tidak valid.', 'error');
                return;
            }

            displayMessage('Pendaftaran berhasil! Silakan masuk.', 'success');
            registerForm.reset();
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function displayMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.classList.add(type); 
        messageDiv.style.display = 'block';
    }
});