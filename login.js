document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            messageDiv.style.display = 'none';
            messageDiv.className = 'message'; 

            if (username === '' || password === '') {
                displayMessage('Nama pengguna dan kata sandi harus diisi!', 'error');
            } else {
                if (username === 'user' && password === 'password') { 
                    displayMessage('Login berhasil! Selamat datang.', 'success');
                } else {
                    displayMessage('Nama pengguna atau kata sandi salah.', 'error');
                }
            }
        });
    }

    function displayMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.classList.add(type); 
        messageDiv.style.display = 'block'; 
    }
});