/* JavaScript Document

Tooplate 2155 Modern Musician - Adapted for Festival de Inverno

https://www.tooplate.com/view/2155-modern-musician

*/

document.addEventListener('DOMContentLoaded', function () {
   // Mobile Navigation
   const navToggle = document.querySelector('.nav-toggle');
   const nav = document.querySelector('.nav');

   if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
         const isOpen = nav.classList.toggle('active');
         navToggle.setAttribute('aria-expanded', isOpen);
      });

      document.querySelectorAll('.nav-link').forEach(function (link) {
         link.addEventListener('click', function () {
            nav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
         });
      });
   }
});
