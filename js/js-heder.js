const btmobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}
btmobile.addEventListener('click', toggleMenu);
