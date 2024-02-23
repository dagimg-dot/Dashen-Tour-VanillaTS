import { html } from "lit-html";
import { facebook, instagram, twitter, youtube } from "../../static";
import { CompanyLogoIcon } from "./Icons";

const Footer = () => {
  const year = Date().split(" ")[3];

  return html`<footer class="footer">
    <div class="footer-wrapper">
      <div class="container-m grid grid-footer">
        <div class="logo-col">
          <a href="#" class="footer-logo"> ${CompanyLogoIcon("white")} </a>
          <ul class="social-links">
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src=${facebook} alt="facebook"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src=${instagram} alt="instagram"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src=${twitter} alt="twitter"
              /></a>
            </li>
            <li>
              <a class="footer-link" href="#" class="href"
                ><img src=${youtube} alt="youtube"
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
          Copyright &copy; ${year} by Dashen Tour PLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>`;
};

export default Footer;
