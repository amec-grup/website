// Funcție pentru copierea numărului de telefon în clipboard
document.getElementById('contactButton').addEventListener('click', function() {
    var phoneNumber = this.getAttribute('data-phone');
    var tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Afișează notificarea
    var notification = document.getElementById('notification');
    notification.classList.add('show');

    // Ascunde notificarea după 3 secunde
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
});

// Închide notificarea când se apasă pe 'x'
document.querySelector('.notification .close-btn').addEventListener('click', function() {
    var notification = document.getElementById('notification');
    notification.classList.remove('show');
});
