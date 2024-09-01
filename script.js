function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('#element', {
    strings: ['third-year student at Northeastern University.', 'Computer Science major and Spanish minor.', 'software engineer.'],
    typeSpeed: 60,
    backSpeed: 25,
    loop: true,
});