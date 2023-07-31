import { scrollTo } from '../../utils/scrollTo';

export function createContactBanner() {
    const contactBanner = document.createElement('div');
    contactBanner.classList.add('contact-banner');

    const contactBannerStatic = document.createElement('div');
    contactBannerStatic.classList.add('contact-banner-static');

    const contactBannerStaticContent = document.createElement('div');
    contactBannerStaticContent.classList.add('contact-banner-static-content');

    const contactBannerStaticContentH1 = document.createElement('h1');
    contactBannerStaticContentH1.innerText = 'Get in touch';

    const contactBannerStaticContentH5 = document.createElement('h5');
    contactBannerStaticContentH5.innerText = 'Our team of experts is ready to provide personalized assistance in choosing your clothing.';

    const contactBannerStaticContentButton = document.createElement('button');
    contactBannerStaticContentButton.setAttribute('type', 'button');
    contactBannerStaticContentButton.innerText = 'Contact us';

    const contactBannerImage = document.createElement('img');
    contactBannerImage.classList.add('contact-banner-image');
    contactBannerImage.setAttribute('src', 'https://robbreport.com/wp-content/uploads/2023/07/WatchShop_Int3.jpg?w=1000');

    contactBanner.appendChild(contactBannerStatic);
    contactBanner.appendChild(contactBannerImage);
    contactBannerStatic.appendChild(contactBannerStaticContent);
    contactBannerStaticContent.appendChild(contactBannerStaticContentH1);
    contactBannerStaticContent.appendChild(contactBannerStaticContentH5);
    contactBannerStaticContent.appendChild(contactBannerStaticContentButton);
 
    contactBannerStaticContentButton.addEventListener('click', () => scrollTo(document.querySelector('#contact-form')));

    document.querySelector('main').appendChild(contactBanner);
}


