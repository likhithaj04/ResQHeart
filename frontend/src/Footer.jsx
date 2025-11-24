import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-line">
        Ready to Make a Difference? Start by Adopting or Donating 🐾
      </div>

      <div className="footer-content container">
        <div className="row py-4 text-center text-md-start">

          {/* Column 1 - About */}
          <div className="col-md-3 mb-4">
            <h5>ResQHeart</h5>
            <p>
              A platform to rescue, heal, and rehome strays. Join us to build a world filled with compassion.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/adopt">Adopt</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/volunteer">Volunteer</a></li>
              <li><a href="/awareness">Awareness</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p>Email: support@resqheart.org</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Bangalore, India</p>
          </div>

          {/* Column 4 - Newsletter & Socials */}
          <div className="col-md-3 mb-4">
            <h5>Subscribe</h5>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Join</button>
            </form>
            <div className="social-icons mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
