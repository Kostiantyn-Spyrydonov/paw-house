import Accordion from 'accordion-js';

export function initFaq() {

    new Accordion('.faq',
        {
            elementClass: 'faq-item',
            triggerClass: 'faq-question',
            panelClass: 'faq-answer',
            openMultiple: false
        });
}