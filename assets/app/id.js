// assets/app/id.js - Zaktualizowana wersja

document.addEventListener('DOMContentLoaded', function() {
    // Ustawienie powitania zależnego od pory dnia
    const welcomeElement = document.querySelector('.welcome');
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
        welcomeElement.textContent = 'Dzień dobry!';
    } else if (hour >= 12 && hour < 18) {
        welcomeElement.textContent = 'Miłego popołudnia!';
    } else {
        welcomeElement.textContent = 'Dobry wieczór!';
    }
    
    // Obsługa logowania
    const loginButton = document.querySelector('.login');
    const passwordInput = document.querySelector('.password_input');
    
    loginButton.addEventListener('click', function() {
        // Przejdź do dokumentów po kliknięciu "Zaloguj się"
        window.location.href = 'documents.html';
    });
    
    // Enter również loguje
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            window.location.href = 'documents.html';
        }
    });
    
    // Pokazuj/ukryj hasło
    const eyeButton = document.querySelector('.eye');
    eyeButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeButton.style.backgroundImage = 'url(assets/app/images/eye_open.html)';
        } else {
            passwordInput.type = 'password';
            eyeButton.style.backgroundImage = 'url(assets/app/images/eye_closed.html)';
        }
    });
});