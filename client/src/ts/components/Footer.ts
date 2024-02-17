import { html } from "lit-html";

const Footer = () => {
  const year = Date().split(" ")[3];

  return html`<footer class="footer">
    <div class="footer-wrapper">
      <div class="container-m grid grid-footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <svg
              width="83"
              height="90"
              viewBox="0 0 83 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 59.1815C0 51.8507 1.3356 45.8768 4.00681 41.2598C8.64432 33.1184 15.1183 29.0477 23.4287 29.0477C28.2517 29.0477 32.3698 30.898 35.783 34.5987V11.0732L46.3565 6.31522H46.913V59.1815C46.913 66.5122 45.5774 72.4861 42.9062 77.1031C38.1945 85.2445 31.702 89.3152 23.4287 89.3152C15.2667 89.3152 8.79272 85.2445 4.00681 77.1031C1.3356 72.5566 0 66.5827 0 59.1815ZM11.13 59.1815C11.13 65.8074 11.8906 70.5301 13.4117 73.3496C15.9345 78.0018 19.2735 80.328 23.4287 80.328C27.621 80.328 30.96 78.0018 33.4457 73.3496C35.0039 70.4243 35.783 65.7016 35.783 59.1815C35.783 52.6613 35.0039 47.9386 33.4457 45.0133C30.9971 40.3963 27.6581 38.0878 23.4287 38.0878C19.1993 38.0878 15.8603 40.4316 13.4117 45.119C11.8906 48.0443 11.13 52.7318 11.13 59.1815Z"
                fill="white"
              />
              <path
                d="M57.1913 83V32.3648L46.913 37V28.5L57.1913 23.4906V4.69811L67.9214 0H68.4861V22.5L81.2421 28.5L83 24.0126L78.5 35.5L68.4861 31V78.3019L57.7561 83H57.1913Z"
                fill="white"
              />
            </svg>
            <h1 class="hero-company-name">Dashen Tour</h1>
          </a>
          <ul class="social-links">
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src="././src/assets/icons/facebook.svg" alt="facebook"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src="././src/assets/icons/instagram.svg" alt="instagram"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src="././src/assets/icons/twitter.svg" alt="twitter"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src="././src/assets/icons/youtube.svg" alt="youtube"
              /></a>
            </li>
          </ul>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p>Bahir Dar Magdela Street, <br />Amhara Ethiopia</p>
            <p>
              <a class="contact" href="tel:+251906290648">+251 906 290 648</a>
            </p>
            <p>
              <a class="contact" href="mailto:dashentour@gmail.com"
                >dashentour@gmail.com</a
              >
            </p>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Create account</a></li>
            <li><a class="footer-link" href="#">Sign in</a></li>
            <li><a class="footer-link" href="#">iOS app</a></li>
            <li><a class="footer-link" href="#">Android app</a></li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Quick Links</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Booking</a></li>
            <li><a class="footer-link" href="#">Destinations</a></li>
            <li><a class="footer-link" href="#">Packages</a></li>
            <li><a class="footer-link" href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright-wrapper">
        <p class="footer-copyright-text">
          Copyright &copy; ${`${year} by Dashen Tour PLC. All rights reserved.`}
        </p>
      </div>
    </div>
  </footer>`;
};

export default Footer;
