// Funcție pentru a verifica dacă dispozitivul este mobil
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Selectăm toate butoanele cu clasa 'contact-btn'
var contactButtons = document.querySelectorAll('.contact-btn');

contactButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var phoneNumber = this.getAttribute('data-phone');
        
        if (isMobileDevice()) {
            // Pe dispozitive mobile, inițiem un apel
            window.location.href = 'tel:' + phoneNumber;
        } else {
            // Pe desktop, copiem numărul în clipboard
            event.preventDefault(); // Prevenim acțiunea implicită dacă este un link
            var tempInput = document.createElement('input');
            tempInput.value = phoneNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Afișăm notificarea
            var notification = document.getElementById('notification');
            notification.classList.add('show');

            // Ascundem notificarea după 3 secunde
            setTimeout(function() {
                notification.classList.remove('show');
            }, 3000);
        }
    });
});

// Închidem notificarea când se apasă pe 'x'
var closeBtn = document.querySelector('.notification .close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        var notification = document.getElementById('notification');
        notification.classList.remove('show');
    });
}
