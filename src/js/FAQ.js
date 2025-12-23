import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initFaq() {
  const faqContainer = document.querySelector('.faq-container');

  if (!faqContainer) return;

  new Accordion('.faq-container', {
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-answer',
    activeClass: 'active',
    openOnInit: [],
    collapse: true,
    showMultiple: false,
  });
}
