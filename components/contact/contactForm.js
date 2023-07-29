export function createContactForm() {
    const contactFormMain = document.createElement('div');
    contactFormMain.classList.add('contact-form-main');

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const contactFormInputName = document.createElement('div');
    contactFormInputName.classList.add('contact-form-input');

    const contactFormInputNameInput = document.createElement('input');
    contactFormInputNameInput.setAttribute('type', 'text');
    contactFormInputNameInput.setAttribute('placeholder', 'Name');

    const contactFormInputNameSpan = document.createElement('span');
    contactFormInputNameSpan.innerText = 'Invalid name';

    const contactFormInputCompany = document.createElement('div');
    contactFormInputCompany.classList.add('contact-form-input');

    const contactFormInputCompanyInput = document.createElement('input');
    contactFormInputCompanyInput.setAttribute('type', 'text');
    contactFormInputCompanyInput.setAttribute('placeholder', 'Company');

    const contactFormInputCompanySpan = document.createElement('span');
    contactFormInputCompanySpan.innerText = 'Invalid company name';

    const contactFormInputEmail = document.createElement('div');
    contactFormInputEmail.classList.add('contact-form-input');

    const contactFormInputEmailInput = document.createElement('input');
    contactFormInputEmailInput.setAttribute('type', 'email');
    contactFormInputEmailInput.setAttribute('placeholder', 'Email');

    const contactFormInputEmailSpan = document.createElement('span');
    contactFormInputEmailSpan.innerText = 'Invalid email';

    const contactFormInputMessage = document.createElement('div');
    contactFormInputMessage.classList.add('contact-form-input');

    const contactFormInputMessageTextarea = document.createElement('textarea');
    contactFormInputMessageTextarea.setAttribute('placeholder', 'Write your message here...');

    const contactFormInputMessageSpan = document.createElement('span');
    contactFormInputMessageSpan.innerText = 'Invalid message';

    const contactFormButton = document.createElement('button');
    contactFormButton.setAttribute('type', 'submit');
    contactFormButton.innerText = 'Send';

    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');

    const contactMapIframe = document.createElement('iframe');
    contactMapIframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12461.142771588296!2d-9.18444337178648!3d38.66530180280448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934df0cb911e9%3A0x90de813573827d15!2sLidl%20Almada%20Pragal!5e0!3m2!1sen!2spt!4v1686622414962!5m2!1sen!2spt');

    const contactMapAddress = document.createElement('p');
    contactMapAddress.innerText = 'C.Cívi.Pragal, R. Abel Salazar 11, 2805-312 Almada';

    contactFormMain.appendChild(contactForm);
    contactForm.appendChild(contactFormInputName);
    contactFormInputName.appendChild(contactFormInputNameInput);
    contactFormInputName.appendChild(contactFormInputNameSpan);
    contactForm.appendChild(contactFormInputCompany);
    contactFormInputCompany.appendChild(contactFormInputCompanyInput);
    contactFormInputCompany.appendChild(contactFormInputCompanySpan);
    contactForm.appendChild(contactFormInputEmail);
    contactFormInputEmail.appendChild(contactFormInputEmailInput);
    contactFormInputEmail.appendChild(contactFormInputEmailSpan);
    contactForm.appendChild(contactFormInputMessage);
    contactFormInputMessage.appendChild(contactFormInputMessageTextarea);
    contactFormInputMessage.appendChild(contactFormInputMessageSpan);
    contactForm.appendChild(contactFormButton);
    contactFormMain.appendChild(contactMap);
    contactMap.appendChild(contactMapIframe);
    contactMap.appendChild(contactMapAddress);

    return contactFormMain;
}