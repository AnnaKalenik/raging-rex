export default function heroIframe() {
    const IFRAME = document.querySelector('#iframe');
    const BTN_PLAY_IFRAME = document.querySelector('#btn-play-iframe');
    const HERO_BTNS = document.querySelector('#hero-btns');
    
    BTN_PLAY_IFRAME.addEventListener("click",()=> {
        IFRAME.classList.add('hero__iframe_active');
        IFRAME.setAttribute('width', '100%');
        IFRAME.setAttribute('height', '500');
        HERO_BTNS.classList.add('hero__wrapper-btns_hidden');
    });
}