// assets/app/manifest.js - Globalne funkcje nawigacyjne

// Globalna funkcja nawigacji
window.sendTo = function(page, top = null) {
    console.log('Navigating to:', page);
    
    if (top) {
        localStorage.setItem('top', top);
    }
    
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
        // Fallback - spróbuj bezpośrednio
        window.location.href = page + '.html';
    }
};

// Inicjalizacja po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('mObywatel app initialized');
});