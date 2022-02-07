const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".navlist");


hamburger.addEventListener("click", () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// This for the responsive page only..
