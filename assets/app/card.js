// assets/app/card.js - Zaktualizowana wersja z rozwijaniem dodatkowych danych

document.addEventListener('DOMContentLoaded', function() {
    // Aktualizacja czasu
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pl-PL', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const dateString = now.toLocaleDateString('pl-PL', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const timeElement = document.getElementById('time');
        if (timeElement) {
            timeElement.textContent = `${timeString} • ${dateString}`;
        }
    }
    
    updateTime();
    setInterval(updateTime, 60000);
    
    // Obsługa przycisku kopiuj
    const copyButtons = document.querySelectorAll('.main_button_filled');
    copyButtons.forEach(button => {
        if (button.textContent.includes('Kopiuj')) {
            button.addEventListener('click', function() {
                const seriesNumber = document.getElementById('seriesAndNumber');
                if (seriesNumber) {
                    navigator.clipboard.writeText(seriesNumber.textContent)
                        .then(() => {
                            const originalText = button.textContent;
                            button.textContent = 'Skopiowano!';
                            setTimeout(() => {
                                button.textContent = originalText;
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('Błąd kopiowania:', err);
                        });
                }
            });
        }
    });
    
    // Obsługa aktualizacji
    const updateButtons = document.querySelectorAll('.update');
    updateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = button.textContent;
            button.textContent = 'Aktualizowanie...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Zaktualizowano!';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            }, 1500);
        });
    });
    
    // OBSŁUGA ROZWIJANIA DODATKOWYCH DANYCH
    const infoHolder = document.querySelector('.info_holder');
    if (infoHolder) {
        infoHolder.addEventListener('click', function() {
            // Przełącz klasę .unfolded
            this.classList.toggle('unfolded');
            
            // Aktualizuj strzałkę (CSS już to obsługuje przez klasę .unfolded)
            const arrow = this.querySelector('.action_arrow');
            if (arrow) {
                // CSS już obsługuje transform przez klasę .unfolded
                console.log('Rozwinięto/zwinięto dodatkowe dane');
            }
        });
        
        // Upewnij się, że początkowo jest zwinięte
        infoHolder.classList.remove('unfolded');
    }
});