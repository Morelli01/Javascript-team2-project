const toggleThemeBtn = document.getElementById('toggle-theme-btn')
import sunImage from '../images/themecolor/sun.png';
import moonImage from '../images/themecolor/moon.png';

const toggleThemeImage = document.getElementById('toggle-theme-image')
toggleThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light')
        toggleThemeImage.src = sunImage;
        localStorage.theme = 'dark'
    } else {
        document.body.classList.add('light');
        toggleThemeImage.src = moonImage;
        localStorage.theme = 'light'
}
})

if (localStorage.theme === 'light') {
    document.body.classList.add('light');
    toggleThemeImage.src = moonImage;
}





