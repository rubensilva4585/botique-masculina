import { createContactForm } from '../contact/contactForm.js'

export function createContactFormGrid() {
    const contactFormDiv = document.createElement('div');
    contactFormDiv.classList.add('contact');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container');

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');

    const contactHeaderText = document.createElement('h2');
    contactHeaderText.innerText = 'Contact Us';

    contactFormDiv.appendChild(contactContainer);
    contactContainer.appendChild(contactHeader);
    contactHeader.appendChild(contactHeaderText);

    const contactFormMain = createContactForm();
    contactContainer.appendChild(contactFormMain);

    document.querySelector('main').appendChild(contactFormDiv);
}
