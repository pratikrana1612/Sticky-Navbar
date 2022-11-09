const content_two = document.querySelector('.content_info .two');
const navbar = document.querySelector('nav');

window.addEventListener('scroll',() =>
{
    if(content_two.getBoundingClientRect().top < window.innerHeight)
    {
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky')
    }
})