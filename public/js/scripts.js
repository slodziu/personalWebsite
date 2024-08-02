
/**
 * Function to apply a dark theme to the website.
 */
function applyDarkTheme() {
    document.body.classList.add('dark-theme');
    document.querySelector('.container').classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme');
    document.querySelector('main').classList.add('dark-theme');
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('dark-theme');
    });
    document.querySelectorAll('a').forEach(link => {
        link.classList.add('dark-theme');
    });
}

/**
 * Function to remove the dark theme from the website.
 */
function removeDarkTheme() {
    document.body.classList.remove('dark-theme');
    document.querySelector('.container').classList.remove('dark-theme');
    document.querySelector('header').classList.remove('dark-theme');
    document.querySelector('main').classList.remove('dark-theme');
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('dark-theme');
    });
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('dark-theme');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Load the saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
    }

    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            removeDarkTheme();
            localStorage.setItem('theme', 'light');
        } else {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });
});