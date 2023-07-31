import { createContactForm } from '../contact/contactForm.js'
import { createPageTitle } from "../createPageTitle.js";

export function createContactFormGrid() {
    const contactFormDiv = document.createElement('div');
    contactFormDiv.classList.add('contact');
    contactFormDiv.setAttribute('id', 'contact-form');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container');

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');

    contactFormDiv.appendChild(contactContainer);
    contactContainer.appendChild(contactHeader);
    contactHeader.appendChild(createPageTitle('Contact Us', 'Your Satisfaction, Our Priority'));

    const contactFormMain = createContactForm();
    contactContainer.appendChild(contactFormMain);

    document.querySelector('main').appendChild(contactFormDiv);
}
