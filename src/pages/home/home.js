import Navbar from "../../components/navbar/navbar";
import FAQBox from "../../components/faq/faq-box";
import Footer from "../../components/footer/footer";
import { TbArrowNarrowRight } from "react-icons/tb";
import { IoSparklesSharp, IoPeopleSharp } from "react-icons/io5";
import { HiShieldCheck } from "react-icons/hi";

import "./home.css";
const Home = () => {
  return (
    <div className="home">
       
 
      <div className="header">
        <Navbar />
        <div className="hero">
          <div className="hero-body">
            <div className="hero-above">
              <div className="background" />
              <b className="h4">🚀 Let’s go</b>
            </div>
            <div className="hero-text">
              <b className="title">
                <span>{`Make your university life easier with `}</span>
                <span className="student-county">Student County.</span>
              </b>
              <div className="description">
                While pursuing University, utilize Student County's features to
                save money, manage time, and earn extra funds.
              </div>
            </div>
            <div className="hero-cta">
              <a href='/sign-in'>
                <button className="btn btn-primary">
                  Sign in
                  <TbArrowNarrowRight className="arrow-right-icon" />
                </button>
              </a>
              <div className="h6 gray-text">or</div>
              <a href='/sign-up'>
                <button className="btn btn-secondary">
                  Sign Up
                  <TbArrowNarrowRight className="arrow-right-icon" />
                </button>
              </a>
            </div>
          </div>
          <img className="hero-image-icon" alt="" src="/assets/images/header.svg" />
        </div>
      </div>
      

      <div className="services-container">
        <b className="h1">What we offer?</b>
        <div className="services">
          <div className="service">
            <div className="service-body reverse">
              <div className="service-text">
                <b className="h2 service-title">Student Book Exchange Store Service</b>
                <span className="service-description">
                  This service allows students to exchange or sell
                  books and even negotiate among themselves. 
                  Students can easily search for the books 
                  they need or sell their books.
                </span>
              </div>
              <div className="buttons">
                <a href='/dashboard/book-store'>
                  <button className="btn btn-primary">
                    Book Store
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
                <a href='/services/book-store'>
                  <button className="btn btn-secondary">
                    Learn More
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
              </div>
            </div>
            <img className="service-picture" alt="" src="/assets/images/services/book-store.svg" />
          </div>
          <div className="service">
          <img className="service-picture" alt="" src="/assets/images/services/housing.svg" />
            {/* <div className="" /> */}
            <div className="service-body">
              <div className="service-text">
              <b className="h2 service-title">Lodging Solutions for Student</b>
                <span className="service-description">
                Find the perfect roommate and split your housing
                costs or advertise your available space for potential
                renters with our student housing service
                </span>
              </div>
              <div className="buttons">
                <a href='/dashboard/housing'>
                  <button className="btn btn-primary">
                    Housing Service
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
                <a href='/services/housing'>
                  <button className="btn btn-secondary">
                    Learn More
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-body reverse">
              <div className="service-text">
              <b className="h2 service-title">Student Carpooling and Ride-Sharing Platform</b>
                <span className="service-description">
                Easily find ride-sharing and carpooling options with our
                  platform, exclusively for students. Save your money and reduce
                  your carbon footprint.
                </span>
              </div>
              <div className="buttons">
                <a href='/dashboard/riding'>
                  <button className="btn btn-primary">
                    Riding Service
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
                <a href='/services/riding'>
                  <button className="btn btn-secondary">
                    Learn More
                    <TbArrowNarrowRight className="arrow-right-icon" />
                  </button>
                </a>
              </div>
            </div>
            <img className="service-picture" alt="" src="/assets/images/services/riding.svg" />
          </div>
        </div>
      </div>
      <div className="why-should-you-choose-us">
        <b className="h1">Why should you choose us?</b>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <IoPeopleSharp className="frame-icon" /> 
              {/* <img className="frame-icon" alt="" src="/icon.svg" /> */}
            </div>
            <div className="feature-text">
              <div className="h3">Community Hub</div>
              <div className="feature-description">
                Strong Student Community: Connect, share resources, and help
                each other.
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon yellow">
               <img className="frame-icon" alt="" src="/sparkles.svg" />
            </div>
            <div className="feature-text">
              <div className="h3">Versatile</div>
              <div className="feature-description">
                Conveniently Multi Services: Accessible and affordable services
                for all your student needs.
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon blue">
              <HiShieldCheck className="frame-icon" />
              {/* <img className="frame-icon" alt="" src="/icon1.svg" /> */}
            </div>
            <div className="feature-text">
              <div className="h3">Safe and Secure</div>
              <div className="feature-description">
                Safe, Trustworthy Community with Verified Users and Built-in
                Safety Measures.
              </div>
            </div>
          </div>
        </div>
        <div className="feature-question">
          Not convinced yet? You can go to the services page to learn more about our services
          <a href='/services'>
            <button className="btn btn-primary">
            Learn More
            <TbArrowNarrowRight className="arrow-right-icon" />
          </button>
          </a>
        </div>
      </div>
      <div className="faq-background">
        <FAQBox />
      </div>
      <div className="section">
        <div className="section-text">
          Discover the platform that can help you fulfill your study life
          potential.
        </div>
        <div className="hero-cta">
        <a href='/sign-in'>
                <button className="btn btn-primary">
                  Sign in
                  <TbArrowNarrowRight className="arrow-right-icon" />
                </button>
              </a>
              <div className="h6 gray-text">or</div>
              <a href='/sign-up'>
                <button className="btn btn-secondary">
                  Sign Up
                  <TbArrowNarrowRight className="arrow-right-icon" />
                </button>
              </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
