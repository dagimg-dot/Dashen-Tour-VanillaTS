import { html, render } from "lit-html";
import "../../css/style.css";
import { HomeState } from "../types/homeTypes";

class HomeView {
  root: HTMLDivElement | null = null;

  render(state: HomeState) {
    this.root = state.rootNode;
    this._generateMarkup(state);
  }

  update(state: HomeState) {
    this._generateMarkup(state);
  }

  _generateMarkup(state: HomeState) {
    render(
      html`
        <main>
          <section class="section-hero">
            <div class="hero grid grid-2-cols">
              <div class="blur-wrap">
                <div class="logo container-p">
                  <img
                    src="./src/assets/icons/company-logo.svg"
                    alt="company logo"
                  />
                </div>
                <div class="hero-text-box container-p">
                  <span class="right">das<br />to</span>
                  <span class="left">hen<br />ur</span>
                  <h1 class="heading-primary">
                    Let's explore our country together!
                  </h1>
                  <p class="hero-description">
                    Dashen tour is an ethiopian tour company dedicated to give
                    you the best trip you can imagine. We have helped tourists
                    navigate Ethiopia better. No regrets in choosing us.
                  </p>
                  <a href="#/signup" class="btn btn-fill margin-right-sm"
                    >Start exploring</a
                  >
                  <a href="#" class="btn btn-outline">Learn more &rarr;</a>
                </div>
              </div>
              <div class="unblurred-wrap">
                <div class="socials container-p">
                  <a href="#" class="href"
                    ><img src="./src/assets/icons/facebook.svg" alt="facebook"
                  /></a>
                  <a href="#" class="href"
                    ><img
                      src="./src/assets/icons/instagram.svg"
                      alt="instagram"
                  /></a>
                  <a href="#" class="href"
                    ><img src="./src/assets/icons/twitter.svg" alt="twitter"
                  /></a>
                  <a href="#" class="href"
                    ><img src="./src/assets/icons/youtube.svg" alt="youtube"
                  /></a>
                </div>
                <nav class="main-nav container-p">
                  <ul class="main-nav-list">
                    <li><a href="#" class="main-nav-link">Contact</a></li>
                    <li><a href="#" class="main-nav-link">Packages</a></li>
                    <li><a href="#" class="main-nav-link">Destinations</a></li>
                    <li><a href="#" class="main-nav-link">Booking</a></li>
                    <li>
                      <a href="#/login" class="main-nav-link btn btn-fill"
                        >Login</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          <section class="section-top-dest">
            <div class="container-m">
              <span class="sub-heading">top destinations</span>
              <h2 class="heading-secondary">
                Some of the most popular and best locations that we provide
                package to
              </h2>
            </div>
            <div class="container-m">
              <div class="destinations grid grid-2-cols grid-center-v">
                <!-- Top Destination 01 -->
                <div class="top-dest-text-box">
                  <p class="top-dest-number">፩</p>
                  <h3 class="heading-tertiary">Fasiledes Castle</h3>
                  <p class="top-dest-description">
                    Fasiledes Castle is located in the beautiful and historical
                    city of Gondar, a city in the amhara region. It is 650km
                    away from the capital city Addis Ababa. This tourist
                    location has a plenty of things to watch for like the whole
                    city, the people, the culture and so on.
                  </p>
                </div>
                <div class="top-dest-img-box">
                  <img
                    src="./src/assets/images/destinations/007.jpg"
                    alt="Picture of Gondar Fasiledes Castle"
                    class="top-dest-img"
                  />
                </div>
                <!-- Top Destination 02 -->
                <div class="top-dest-img-box">
                  <img
                    src="./src/assets/images/destinations/011.jpg"
                    alt="Picture of Gondar Fasiledes Castle"
                    class="top-dest-img"
                  />
                </div>
                <div class="top-dest-text-box">
                  <p class="top-dest-number">፪</p>
                  <h3 class="heading-tertiary">Gerehalta</h3>
                  <p class="top-dest-description">
                    Fasiledes Castle is located in the beautiful and historical
                    city of Gondar, a city in the amhara region. It is 650km
                    away from the capital city Addis Ababa. This tourist
                    location has a plenty of things to watch for like the whole
                    city, the people, the culture and so on.
                  </p>
                </div>
                <!-- Top Destination 03 -->
                <div class="top-dest-text-box">
                  <p class="top-dest-number">፫</p>
                  <h3 class="heading-tertiary">Lalibela</h3>
                  <p class="top-dest-description">
                    Fasiledes Castle is located in the beautiful and historical
                    city of Gondar, a city in the amhara region. It is 650km
                    away from the capital city Addis Ababa. This tourist
                    location has a plenty of things to watch for like the whole
                    city, the people, the culture and so on.
                  </p>
                </div>
                <div class="top-dest-img-box">
                  <img
                    src="./src/assets/images/destinations/016.jpg"
                    alt="Picture of Gondar Fasiledes Castle"
                    class="top-dest-img"
                  />
                </div>
              </div>
            </div>
            <div class="explore-more container-m">
              <a href="#" class="explore-btn btn">Explore more</a>
            </div>
          </section>
          <section class="section-testimonials">
            <div class="testimonials-container">
              <span class="sub-heading">Testimonials</span>
              <h2 class="heading-secondary">
                People got a lot of things to say about us
              </h2>
              <div class="testimonials">
                <figure class="testimonial">
                  <div>
                    <img
                      class="testimonial-img"
                      src="././src/assets/images/users/jd.png"
                      alt="Photo of customer Abebe Chala"
                    />
                  </div>
                  <blockquote class="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit laudantium magnam tenetur cumque officiis eligendi!
                    Minima, mollitia necessitatibus. Lorem ipsum dolor.
                  </blockquote>
                  <p class="testimonial-name">&mdash; JD Smith</p>
                </figure>
                <figure class="testimonial">
                  <div>
                    <img
                      class="testimonial-img"
                      src="././src/assets/images/users/abebe.png"
                      alt="Photo of customer Abebe Chala"
                    />
                  </div>
                  <blockquote class="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit laudantium accusantium consectetur adipisicing
                    elit. Consequatur harum placeat numquam tempore modi culpa.
                  </blockquote>
                  <p class="testimonial-name">&mdash; Abebe Chala</p>
                </figure>
                <figure class="testimonial">
                  <div>
                    <img
                      class="testimonial-img"
                      src="././src/assets/images/users/elif.png"
                      alt="Photo of customer Abebe Chala"
                    />
                  </div>
                  <blockquote class="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit cupiditate facilis alias volupta amet consectetur
                    adipisicing elit. Consequatur harum placeat numquam tempore
                    modi culpa.
                  </blockquote>
                  <p class="testimonial-name">&mdash; Elif Chikur</p>
                </figure>
                <figure class="testimonial">
                  <div>
                    <img
                      class="testimonial-img"
                      src="././src/assets/images/users/jeremi.jpg"
                      alt="Photo of customer Abebe Chala"
                    />
                  </div>
                  <blockquote class="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit laudantium accusantium enim vor sit amet
                    consectetur adipisicing elit. Consequatur harum placeat
                    numquam tempore modi culpa.
                  </blockquote>
                  <p class="testimonial-name">&mdash; Jeremiah II</p>
                </figure>
              </div>
            </div>
            <div class="gallery">
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (1).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (2).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (3).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (4).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (13).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (6).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (7).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (14).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (9).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (10).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (11).jpg"
                  alt=""
                />
              </figure>
              <figure class="gallery-item">
                <img
                  src="././src/assets/images/gallery/gallery (15).png"
                  alt=""
                />
              </figure>
            </div>
          </section>
          <section class="section-packages">
            <div class="container-m">
              <span class="sub-heading">packages</span>
              <h2 class="heading-secondary">
                These are some of the packages we offer with great pleasure.
              </h2>
            </div>
            <div class="container-m grid grid-3-cols">
              <!-- Package 01 -->
              <div class="packages">
                <div class="package-wrapper">
                  <header class="package-header">
                    <p class="package-name">Basic</p>
                    <p class="package-price">6000<span>ETB</span></p>
                    <p class="package-text">
                      Take time to refresh your mind and body
                    </p>
                  </header>
                  <ul class="list">
                    <li class="list-item">
                      <svg
                        class="list-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                        />
                      </svg>
                      <span>2 days</span>
                    </li>
                    <li class="list-item">
                      <svg
                        class="list-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                        />
                      </svg>
                      <span>3 star hotel</span>
                    </li>
                    <li class="list-item">
                      <svg
                        class="list-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                        />
                      </svg>
                      <span>No Transportation</span>
                    </li>
                    <li class="list-item">
                      <svg
                        class="list-icon"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                        />
                      </svg>
                      <span>1 location to be visited</span>
                    </li>
                  </ul>
                </div>
                <div class="package-signup">
                  <a href="#" class="btn btn-main">Start exploring</a>
                </div>
              </div>
              <!-- Package 02 -->
              <div class="packages">
                <header class="package-header">
                  <p class="package-name">Couple</p>
                  <p class="package-price">12000<span>ETB</span></p>
                  <p class="package-text">
                    Create unforgetable memories with your beloved one.
                  </p>
                </header>
                <ul class="list">
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>5 days</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>4 star hotel</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>Car transportation half the time</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>3 locations to be visited</span>
                  </li>
                </ul>
                <div class="package-signup">
                  <a href="#" class="btn btn-main">Start exploring</a>
                </div>
              </div>
              <!-- Package 03 -->
              <div class="packages">
                <header class="package-header">
                  <p class="package-name">Family</p>
                  <p class="package-price">18000<span>ETB</span></p>
                  <p class="package-text">
                    Show your family what our country has to offer.
                  </p>
                </header>
                <ul class="list">
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>7 days</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>5 star hotel</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>Full car transportation</span>
                  </li>
                  <li class="list-item">
                    <svg
                      class="list-icon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4315 3.32316L5.96154 13.3232L5.17083 13.2874L1.82083 8.51736L2.63918 7.94264L5.617 12.1827L13.6685 2.67684L14.4315 3.32316Z"
                      />
                    </svg>
                    <span>5 locations to be visited</span>
                  </li>
                </ul>
                <div class="package-signup">
                  <a href="#" class="btn btn-main">Start exploring</a>
                </div>
              </div>
            </div>
          </section>
          <section class="section-featured">
            <div class="container-m">
              <h2 class="heading-featured-in">Featured in</h2>
              <div class="logos">
                <img src="./src/assets/images/companies/selamta.png" alt="" />
                <img src="./src/assets/images/companies/fana.png" alt="" />
                <img src="./src/assets/images/companies/ebs.jpg" alt="" />
                <img
                  src="./src/assets/images/companies/ministry_of_tourism.png"
                  alt=""
                />
                <img
                  src="./src/assets/images/companies/reporter_2.png"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section class="section-cta">
            <div class="container-m">
              <div class="cta">
                <div class="cta-text-box">
                  <h2 class="heading-secondary">
                    Do you have something to say ?
                  </h2>
                  <p class="cta-text">
                    If you have any inquiry, feedback or request, feel free to
                    message us !
                  </p>
                  <form action="#" class="cta-form">
                    <div>
                      <label for="select-what"
                        >What is the message about?</label
                      >
                      <select id="select-what" required>
                        <option value="">Please choose one option:</option>
                        <option value="inquiry">Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="testimonial">Testimonial</option>
                        <option value="request">Request</option>
                      </select>
                    </div>

                    <div>
                      <label for="full-name">Full Name</label>
                      <input
                        id="full-name"
                        type="text"
                        placeholder="Jay Smith"
                        required
                      />
                    </div>

                    <div>
                      <label for="select-where"
                        >Where did you hear about us?</label
                      >
                      <select id="select-where" required>
                        <option value="">Please choose one option:</option>
                        <option value="friends">Friends and family</option>
                        <option value="twitter">Twitter</option>
                        <option value="youtube">Youtube</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                      </select>
                    </div>

                    <div>
                      <label for="email">Email address</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div class="cta-text-area">
                      <label for="message">Message</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <button class="btn btn-form">Send message</button>
                  </form>
                </div>
                <div
                  class="cta-img-box"
                  role="img"
                  aria-label="Arba Minch Lodge"
                ></div>
              </div>
            </div>
          </section>
        </main>
        <footer class="footer">
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
                      ><img
                        src="././src/assets/icons/facebook.svg"
                        alt="facebook"
                    /></a>
                  </li>
                  <li>
                    <a class="footer-link" href="#" class="href"
                      ><img
                        src="././src/assets/icons/instagram.svg"
                        alt="instagram"
                    /></a>
                  </li>
                  <li>
                    <a class="footer-link" href="#" class="href"
                      ><img
                        src="././src/assets/icons/twitter.svg"
                        alt="twitter"
                    /></a>
                  </li>
                  <li>
                    <a class="footer-link" href="#" class="href"
                      ><img
                        src="././src/assets/icons/youtube.svg"
                        alt="youtube"
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="address-col">
                <p class="footer-heading">Contact us</p>
                <address class="contacts">
                  <p>Bahir Dar Magdela Street, <br />Amhara Ethiopia</p>
                  <p>
                    <a class="contact" href="tel:+251906290648"
                      >+251 906 290 648</a
                    >
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
                Copyright &copy; 2023 by Dashen Tour PLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      `,
      state.rootNode
    );
  }
}

export default new HomeView();
