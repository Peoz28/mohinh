// Simple smooth scroll for demo
const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}
// Contact form demo
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting CR7 Inspired Web!');
        form.reset();
    });
}
