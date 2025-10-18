// assets/app/flow.js - Zaktualizowana wersja

function sendTo(page, top = null) {
    console.log('Navigating to:', page);
    
    if (top) {
        localStorage.setItem('top', top);
    }
    
    // Używamy ścieżek względnych
    const pages = {
        'documents': 'documents.html',
        'services': 'services.html',
        'qr': 'qr.html',
        'more': 'more.html',
        'card': 'card.html',
        'id': 'id.html',
        'pesel': 'pesel.html',
        'document': 'document.html',
        'shortcuts': 'shortcuts.html',
        'scan': 'scan.html',
        'show': 'show.html'
    };
    
    const targetPage = pages[page];
    if (targetPage) {
        window.location.href = targetPage;
    } else {
        console.error('Unknown page:', page);
    }
}

// Obsługa kliknięć w usługi
document.addEventListener('DOMContentLoaded', function() {
    const serviceElements = document.querySelectorAll('.service');
    
    serviceElements.forEach(service => {
        service.addEventListener('click', function() {
            const onclick = this.getAttribute('onclick');
            if (!onclick) {
                // Domyślne zachowanie - pokaż informację
                alert('Ta funkcja jest obecnie niedostępna w wersji demonstracyjnej.');
            }
        });
    });
});