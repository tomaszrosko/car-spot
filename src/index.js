import './styles.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.carSwiper', {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 64,
        }
    }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    menuToggle.classList.toggle('active');
});

const images = require.context('./img', false, /\.(png|jpe?g|gif|svg)$/);

const tabs = document.querySelectorAll('.c-tabs__tab');
const panels = document.querySelectorAll('.c-tabs__panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('c-tabs__tab--active'));
        tab.classList.add('c-tabs__tab--active');
        panels.forEach(panel => panel.classList.add('hidden'));
        const targetPanel = document.getElementById(tab.dataset.tab);
        targetPanel.classList.remove('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.previousElementSibling; // Zakładamy, że p < button
            const icon = this.querySelector('.toggle-icon');
            description.classList.toggle('expanded');
            if (description.classList.contains('expanded')) {
                this.innerHTML = `
          Zwiń
          <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path class="toggle-icon" d="M5 15l7-7 7 7"></path>
          </svg>
        `;
            } else {
                this.innerHTML = `
          Rozwiń
          <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path class="toggle-icon" d="M19 9l-7 7-7-7"></path>
          </svg>
        `;
            }
        });
    });
});