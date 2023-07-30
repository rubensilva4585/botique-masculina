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
    contactBannerStaticContentH5.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

    const contactBannerStaticContentButton = document.createElement('button');
    contactBannerStaticContentButton.setAttribute('type', 'button');
    contactBannerStaticContentButton.innerText = 'Contact us';
    contactBannerStaticContentButton.addEventListener('click', scrollButton);

    const contactBannerImage = document.createElement('img');
    contactBannerImage.classList.add('contact-banner-image');
    contactBannerImage.setAttribute('src', 'https://robbreport.com/wp-content/uploads/2023/07/WatchShop_Int3.jpg?w=1000');

    contactBanner.appendChild(contactBannerStatic);
    contactBanner.appendChild(contactBannerImage);
    contactBannerStatic.appendChild(contactBannerStaticContent);
    contactBannerStaticContent.appendChild(contactBannerStaticContentH1);
    contactBannerStaticContent.appendChild(contactBannerStaticContentH5);
    contactBannerStaticContent.appendChild(contactBannerStaticContentButton);

    document.querySelector('main').appendChild(contactBanner);
}

function scrollButton() {
    const contactForm = document.querySelector('#contact-form');
    contactForm.scrollIntoView({ behavior: 'smooth' });
}

{/* <div class="contact-banner">
    <div class="contact-banner-static">
        <div class="contact-banner-static-content">
            <h1>Get in touch</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h5>
            <a href="#contact-form"><button type="button" >Contact us</button></a>
        </div>
    </div>
    <img class="contact-banner-image" src="https://robbreport.com/wp-content/uploads/2023/07/WatchShop_Int3.jpg?w=1000" alt="Image3">
</div> */}