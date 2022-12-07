export default function btnTop() {
    const BTN_TOP = document.querySelector('.btn-to-top');
    
    window.addEventListener('scroll', function() {
        window.scrollY > document.documentElement.clientHeight ? BTN_TOP.style.display = "block" : BTN_TOP.style.display = "none";
    });

    BTN_TOP.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })
}