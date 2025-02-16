// app.js
class LibraCase {
    constructor() {
        this.initNavigation();
        this.initNetworkInteractions();
        this.setupPerformance();
    }

    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleActiveState(link);
                this.scrollToSection(link.hash);
            });
        });
    }

    toggleActiveState(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => 
            link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    initNetworkInteractions() {
        document.querySelectorAll('.node').forEach(node => {
            node.addEventListener('click', () => {
                this.showNodeDetails(node);
            });
            
            node.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') this.showNodeDetails(node);
            });
        });
    }

    setupPerformance() {
        if('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
            });
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new LibraCase();
});