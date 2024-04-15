"use strict";
const hamburger = document.querySelector('.hamburger-menu');
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', () => document.querySelector('nav').classList.toggle('nav-open'));
