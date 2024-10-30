document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbar-menu');

    // Toggle meniul hamburger
    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        
        // Actualizează atributul aria-expanded pentru accesibilitate
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Închide meniul când se dă click pe un link (opțional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Închide meniul când se face click în afara navbar-ului
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.navbar');
        if (!isClickInside && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
});

    // Removed code related to changing navbar appearance on scroll

$(document).ready(function() {
    // Initialize all collapse elements
    $('.collapse').collapse({
        toggle: false
    });
});
 
 
     document.addEventListener('DOMContentLoaded', function() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        const notification = document.getElementById('notification');
        const closeBtn = notification.querySelector('.close-btn');

        contactButtons.forEach(button => {
            button.addEventListener('click', function() {
                const phoneNumber = this.getAttribute('data-phone');

                // Copiază numărul de telefon în clipboard
                navigator.clipboard.writeText(phoneNumber).then(() => {
                    // Afișează notificarea verde
                    notification.classList.add('show');

                    // Redirecționează pentru apelare pe dispozitive mobile
                    if (/Mobi|Android/i.test(navigator.userAgent)) {
                        window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
                    }

                    // Ascunde notificarea după 5 secunde
                    setTimeout(() => {
                        notification.classList.remove('show');
                    }, 5000);
                }).catch(err => {
                    console.error('Eroare la copierea în clipboard: ', err);
                    // Afișează notificare de eroare
                    notification.classList.add('show');
                    notification.querySelector('p').textContent = 'Nu s-a putut copia numărul de telefon. Te rugăm să-l copiezi manual: ' + phoneNumber;

                    // Schimbă culoarea notificării la roșu pentru eroare
                    notification.style.backgroundColor = '#dc3545'; // Roșu

                    // Ascunde notificarea după 5 secunde și resetează culoarea
                    setTimeout(() => {
                        notification.classList.remove('show');
                        notification.style.backgroundColor = '#28a745'; // Verde
                        notification.querySelector('p').textContent = 'Numărul de telefon a fost copiat în clipboard!';
                    }, 5000);
                });
            });
        });

        // Funcționalitatea butonului de închidere
        closeBtn.addEventListener('click', function() {
            notification.classList.remove('show');
        });
    });