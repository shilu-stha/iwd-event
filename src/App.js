import React from "react";
import banner from "./assets/banner.png";
// import sticker from "./assets/sticker.gif"; // Import the sticker gif
import './App.css'; // We'll create this file next

function App() {
  return (
    <div className="app-container">
      {/* Banner Section with Parallax Effect */}
      <div className="parallax-banner">
        <img
          src={banner}
          alt="Event Banner"
          className="banner-image"
        />
      </div>

      <div className="content-container">
        {/* Title and Description */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Build with AI</h1>
            <p>
              Join us for an exciting event celebrating tech, innovation, and community!
              We have a lineup of inspiring talks, hands-on workshops,
              and opportunities to network with industry leaders.
            </p>
            <p>
              This event celebrates International Women's Day (IWD) by bringing together women in AI and Data Science to share technical insights, hands-on learning, and real-world applications of artificial intelligence.
            </p>
          </div>
          
          {/* Hero decoration with sticker removed
          <div className="hero-decoration">
            <img src={sticker} alt="Decorative sticker" className="hero-sticker" />
          </div>
          */}
          
          <h2>Who Should Attend?</h2>
          <ul className="attendees-list">
            <li className="attendee-item">
              <span className="emoji">🌸</span>
              Women in tech interested in AI/ML
            </li>
            <li className="attendee-item">
              <span className="emoji">🔹</span>
              AI engineers, researchers, and developers
            </li>
            <li className="attendee-item">
              <span className="emoji">🔹</span>
              Students & career changers exploring AI
            </li>
            <li className="attendee-item">
              <span className="emoji">🔹</span>
              Entrepreneurs & product leaders
            </li>
          </ul>
        </section>

        {/* Location Section */}
        <section className="info-section">
          <div className="section-content">
            <h2>Location: Virtual</h2>
            <p>
              Join us from anywhere in the world! Our virtual format makes this event accessible to all participants.
              We're especially focused on empowering women in technology in Nepal, providing opportunities to learn,
              connect, and grow in the field of artificial intelligence.
            </p>
            <p>
              No travel required - participate from the comfort of your home or office with just an internet connection.
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="info-section alt-section">
          <div className="section-content">
            <h2>Workshops [TBD]</h2>
            <p>
              Gain hands-on experience with cutting-edge AI technologies through our interactive workshops:
            </p>
            <div className="workshop-cards">
              <div className="workshop-card">
                <div className="workshop-icon">🤖</div>
                {/* <h3>Introduction to Machine Learning with Python [TBD]</h3>
                <p>Learn the fundamentals of machine learning and implement your first ML models using Python.</p>
                <div className="workshop-tag">Beginner Friendly</div> */}
              </div>
              
              <div className="workshop-card">
                <div className="workshop-icon">🧠</div>
                {/* <h3>Building Your First Neural Network [TBD]</h3>
                <p>Dive into neural networks and deep learning concepts with hands-on exercises.</p>
                <div className="workshop-tag">Intermediate</div> */}
              </div>
              
              {/* <div className="workshop-card">
                <div className="workshop-icon">💼</div>
                <h3>Practical Applications of AI in Business [TBD]</h3>
                <p>Explore real-world applications of AI and how they're transforming industries.</p>
                <div className="workshop-tag">All Levels</div>
              </div> */}
            </div>
            <p>
              All workshops are designed to be accessible for various skill levels, with a focus on practical skills you can apply immediately.
            </p>
          </div>
        </section>

        {/* Networking Section */}
        <section className="info-section">
          <div className="section-content">
            <h2>Networking</h2>
            <p>
              Connect with the growing community of women in AI in Nepal. This event is more than just a one-time gathering - it's the beginning of an ongoing community where you can:
            </p>
            
            <div className="benefits-container">
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <div className="benefit-content">
                  <h3>Share</h3>
                  <p>Exchange experiences and knowledge with peers in the field</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">📚</div>
                <div className="benefit-content">
                  <h3>Learn</h3>
                  <p>Gain insights from mentors and industry experts</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🌱</div>
                <div className="benefit-content">
                  <h3>Grow</h3>
                  <p>Expand your professional network and career opportunities</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-content">
                  <h3>Connect</h3>
                  <p>Join future meetups and collaborative projects</p>
                </div>
              </div>
            </div>
            
            <p className="highlight-text">
              Together, we're building a supportive ecosystem for women in technology across Nepal.
            </p>
          </div>
        </section>

        {/* Signup Button */}
        <section className="signup-section">
          {/* Signup container with sticker removed
          <div className="signup-container">
            <div className="sticker-container">
              <img src={sticker} alt="Decorative sticker" className="sticker-gif" />
            </div>
            <div className="signup-content">
              <h2>Ready to join us?</h2>
              <a
                href="https://forms.gle/8gZ1n95CYdm6rtYB9"
                target="_blank"
                rel="noopener noreferrer"
                className="signup-button"
              >
                Sign Up Now
              </a>
              <p className="event-date">March 30, 2025 • 10am-12:30pm</p>
            </div>
          </div>
          */}
          <div className="signup-content">
            <h2>Ready to join us?</h2>
            <a
              href="https://forms.gle/8gZ1n95CYdm6rtYB9"
              target="_blank"
              rel="noopener noreferrer"
              className="signup-button"
            >
              Sign Up Now
            </a>
            <p className="event-date">April 20, 2025 • 10am-12:30pm</p>
          </div>
        </section>

        {/* Footer / Contact Info */}
        <footer>
          <div className="footer-content">
            <div className="footer-info">
              <p>
                Contact us: 
                <a href="mailto:sth.shilu@gmail.com" className="contact-link">
                 Email
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/shilushrestha" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
                <a href="https://twitter.com/lilsunsyn" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Twitter
                </a>
              </p>
            </div>
            {/* Footer decoration with sticker removed
            <div className="footer-decoration">
              <img src={sticker} alt="" className="footer-sticker" aria-hidden="true" />
            </div>
            */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;