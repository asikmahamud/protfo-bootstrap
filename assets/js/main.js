document.addEventListener("alpine:init", () => {
    // Store
    Alpine.store("main", {
        darkMode: (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'true') ? true : false,

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
        },
    });

    //  Data
    Alpine.data("dropdown", () => ({
        open: false,

        toggle() {
            this.open = !this.open;
        },
    }));
});

window.addEventListener("load", (event) => {
    gsap.from('.fade-in', {
        opacity: 0,
        duration: .3,
        delay: .5,
        y: 50,
        stagger: .1
    })
});


// navbar
// const navbar = document.querySelector('.nav-bar').querySelectorAll('a');
// navbar.forEach(Element => {
//     Element.addEventListener('click', function () {
//         navbar.forEach(nav => nav.classList.remove('active'))
//         this.classList.add('active');
//     })
// })

// mobile menu nav
// const nav = document.querySelector('.navbar').querySelectorAll('a')
// nav.forEach(Element => {
//     Element.addEventListener('click', function(){
//         nav.forEach(n => n.classList.remove('active'))
//         this.classList.add('active')
//     })
// })


