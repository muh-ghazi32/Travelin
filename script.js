document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const bookingForm = document.getElementById('bookingForm');
    const bookingConfirmation = document.getElementById('bookingConfirmation');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;

            document.getElementById('confirmNama').textContent = nama;
            document.getElementById('confirmEmail').textContent = email;
            bookingConfirmation.style.display = 'block';
            bookingForm.reset();
        });
    }

    const kritikSaranForm = document.getElementById('kritikSaranForm');
    const saranConfirmation = document.getElementById('saranConfirmation');

    if (kritikSaranForm) {
        kritikSaranForm.addEventListener('submit', function(event) {
            event.preventDefault();
            saranConfirmation.style.display = 'block';
            kritikSaranForm.reset();
        });
    }
});