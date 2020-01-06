//sticky menu 
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 150) {
        document.querySelector('#header').classList.add('menu-shadow');
    } else {
        document.querySelector('#header').classList.remove('menu-shadow');
    }
});


//year
let year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;
