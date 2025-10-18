// assets/app/bar.js - Zaktualizowana wersja

function sendTo(page, top = null) {
    console.log('Navigating to:', page);
    
    if (top) {
        localStorage.setItem('top', top);
    }
    
    // Używamy ścieżek względnych zamiast bezwzględnych
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

// Inicjalizacja paska nawigacyjnego
document.addEventListener('DOMContentLoaded', function() {
    const bottomElements = document.querySelectorAll('.bottom_element_grid');
    
    bottomElements.forEach(element => {
        element.addEventListener('click', function() {
            const page = this.getAttribute('send');
            if (page) {
                sendTo(page);
            }
        });
    });
    
    // Obsługa przycisków wstecz
    const backButtons = document.querySelectorAll('.back_text_fixed');
    backButtons.forEach(button => {
        if (!button.onclick) {
            button.addEventListener('click', function() {
                history.back();
            });
        }
    });
});