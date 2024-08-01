document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var popupId = this.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        this.closest('.popup').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});
