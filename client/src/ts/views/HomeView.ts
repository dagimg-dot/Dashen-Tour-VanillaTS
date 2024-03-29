import { html, render } from "lit-html";
import "../../css/style.css";
import { HomeReactiveElements, HomeState } from "../types/homeTypes";
import {
  companyLogo,
  twitter,
  facebook,
  youtube,
  instagram,
} from "../../static";
import { NavigationBar } from "../components/NavigationBar";
import useAuth from "../hooks/useAuth";
import { EventCallBack, GlobalState } from "../types/types";
import Footer from "../components/Footer";
import { ChevronUp } from "../components/Icons";
import { TopRatedDestinations } from "../components/TopRatedDestinations";

class HomeView {
  root: HTMLDivElement | null = null;

  reactiveElements: HomeReactiveElements = {
    contact: null,
    packages: null,
    toTopBtn: null,
  };

  render(state: HomeState) {
    this.root = state.rootNode;
    const [authState] = useAuth();
    this._renderView(state, authState());
    this._bindElements();
  }

  update(state: HomeState) {
    const [authState] = useAuth();
    this._renderView(state, authState());
  }

  _bindElements() {
    const refs = Object.keys(this.reactiveElements);

    refs.forEach((ref) => {
      this.reactiveElements[ref] = document.getElementById(ref);
    });
  }

  onPageLoad(handler: Function) {
    handler();
  }

  handleNavLinkClick(handler: EventCallBack<PointerEvent>) {
    this.reactiveElements.contact!["onclick"] = handler as EventListener;
    this.reactiveElements.packages!["onclick"] = handler as EventListener;
  }

  handleToTopButtonClick(handler: EventCallBack<PointerEvent>) {
    this.reactiveElements.toTopBtn!["onclick"] = handler as EventListener;
  }

  _renderView(state: HomeState, authState: GlobalState) {
    render(
      html`
        <main class="main-page">
          <section class="section-hero">
            <div class="hero grid grid-2-cols">
              <div class="blur-wrap">
                <div class="main-logo container-p">
                  <img src=${companyLogo} alt="company logo" />
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
                  ${authState.isAuthenticated
                    ? html``
                    : html`<a
                        href="#/signup"
                        class="btn btn-fill margin-right-sm"
                        >Start exploring</a
                      >`}
                  <a href="#" class="btn btn-outline">Learn more &rarr;</a>
                </div>
              </div>
              <div class="unblurred-wrap">
                <div class="socials container-p">
                  <a href="#" class="href"
                    ><img src=${facebook} alt="facebook"
                  /></a>
                  <a href="#" class="href"
                    ><img src=${instagram} alt="instagram"
                  /></a>
                  <a href="#" class="href"
                    ><img src=${twitter} alt="twitter"
                  /></a>
                  <a href="#" class="href"
                    ><img src=${youtube} alt="youtube"
                  /></a>
                </div>
                <nav class="main-nav container-p">
                  <ul class="main-nav-list">
                    <li>
                      <a href="" class="main-nav-link" id="contact">Contact</a>
                    </li>
                    <li>
                      <a href="" class="main-nav-link" id="packages"
                        >Packages</a
                      >
                    </li>
                    <li>
                      <a href="#/destinations" class="main-nav-link"
                        >Destinations</a
                      >
                    </li>
                    <li><a href="#/" class="main-nav-link">Booking</a></li>
                    <li>
                      ${authState.isAuthenticated
                        ? html``
                        : html` <a
                            href="#/login"
                            class="main-nav-link btn btn-fill"
                            >Login</a
                          >`}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          <div>${NavigationBar()}</div>
          <section class="section-top-dest">
            <div class="container-m">
              <span class="sub-heading">top rated destinations</span>
              <h2 class="heading-secondary">
                Some of the most popular and best locations that we provide
                package to
              </h2>
            </div>
            <div class="container-m">${TopRatedDestinations(state)}</div>
            <div class="explore-more container-m">
              <a href="#/destinations" class="explore-btn btn">Explore more</a>
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
          <section class="section-packages" id="section-packages">
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
          <section class="section-cta" id="section-contact">
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
            <div class="offset"></div>
          </section>
          <div id="toTopBtn" class="to-top-container" title="Scroll to top">
            ${ChevronUp}
          </div>
        </main>
        ${Footer()}
      `,
      state.rootNode
    );
  }
}

export default new HomeView();
