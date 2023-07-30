import '../../styles/footer.css'

export function setFooter() {
    const footer = document.querySelector('footer')
    footer.innerHTML = ` 
            <div class="container footer-grid">
            <div class="f-company">
            <h4>Our Name</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quod, voluptate, voluptatem?
            </p>
            </div>
            <div class="f-link">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="/index.html">Shop</a></li>
                <li><a href="/cart.html">Cart</a></li>
                <li><a href="/aboutus.html">About</a></li>
            </ul>
            </div>
            <div class="f-contact">
            <h4>Contact Us</h4>
            <ul>
                <li><i class="fas fa-map-marker-alt"></i> 123 Rua do Bushido</li>
                <li><i class="fas fa-phone"></i> 123-456-789</li>
                <li><i class="fas fa-envelope"></i> support@bushido.pt</li> 
            </ul>              
            </div>
            <div class="f-social">
            <h4>Social</h4>
            <ul>
                <li>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
            </div>
        </div>
        <div class="footer-rights">
            <p>© 2021 Boutique Bushido. All Rights Reserved.</p>
        </div>
    `
}