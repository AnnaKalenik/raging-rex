export default function popup() {
    const VIDEO_BLOCK = document.querySelector('#video');
    const POPUP = document.querySelector('#popup');
    const BTN_CLOSE = document.querySelector('#btn-close');
    const DARK_LAYER = document.querySelector('#dark-layer');
    let YOUTUBE = document.querySelector('#youtube');

    const changeBodyOverflow = () => {
        document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
    }

    const addClassOpen = () => {
        POPUP.classList.add('popup_open');
        changeBodyOverflow();
        addIframe();
    }

    const removeClassOpen = () => {
        POPUP.classList.remove('popup_open');
        changeBodyOverflow();
        removeIframe();
    }

    const addIframe = () => {
        let div = document.createElement('div');
        div.className = 'popup__iframe-block';
        div.innerHTML = `<iframe class="popup__iframe" src="https://www.youtube.com/embed/LX1LaM7VFvE?autoplay=1"></iframe>`;

        YOUTUBE.append(div);
    }

    const removeIframe = () => {
        const iframeBlock = document.querySelector('.popup__iframe-block');
        iframeBlock.remove();
    }

    VIDEO_BLOCK.addEventListener('click', addClassOpen);

    BTN_CLOSE.addEventListener('click', removeClassOpen);
    DARK_LAYER.addEventListener('click', removeClassOpen);
}
