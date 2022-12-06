export default function accordion() {
    const ACCORD = document.querySelectorAll('#accordion-top');

    for (let i = 0; i < ACCORD.length; i++) {
        ACCORD[i].addEventListener('click', function() {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.querySelector('#accordion-btn').classList.remove('faq__btn_active');
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.querySelector('#accordion-btn').classList.add('faq__btn_active');
            }  
        });
    }
}
