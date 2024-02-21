const navLinkActive = document.querySelectorAll('.nav_link');
navLinkActive.forEach(navLinkActive =>{
    navLinkActive.addEventListener('click', ()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkActive.classList.add('active');
    })
})

// let header = document.querySelector('Header');
// header.classList.toggle('sticky', window.scrollY > 100);
