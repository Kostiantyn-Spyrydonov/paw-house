import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initFaq() {
  const faqContainer = document.querySelector('.faq');
  
  if (!faqContainer) return;

  new Accordion('.faq', {
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-answer',
    activeClass: 'active',
    openOnInit: [],
    collapse: true,
    showMultiple: false,
  });
}