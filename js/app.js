// Função para inserir o ano atual no footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Função para controlar o menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Estrutura inicial para o toggle de tema (será implementado posteriormente)
const themeConfig = {
    light: {
        background: 'var(--neutral-light)',
        text: 'var(--neutral-dark)'
    },
    dark: {
        background: 'var(--neutral-dark)',
        text: 'var(--neutral-light)'
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    initMobileMenu();
});
