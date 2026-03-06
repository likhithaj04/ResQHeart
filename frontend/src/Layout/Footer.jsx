import './footer.css';
import bgimg from '../assets/footer.webp';

export default function Footer() {
  return (
    <div
      className="rq-footer"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="rq-footer-overlay"></div>

      <div className="rq-footer-banner">
        Ready to Make a Difference? Start by Adopting or Donating 🐾
      </div>

      <div className="rq-footer-wrapper">

        <div className="rq-footer-grid">

          {/* Column 1 */}
          <div className="rq-footer-box">
            <h5>ResQHeart</h5>
            <p>
              A platform to rescue, heal, and rehome strays.
              Join us to build a world filled with compassion.
            </p>
          </div>

          {/* Column 2 */}
          <div className="rq-footer-box">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/adopt">Adopt</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/volunteer">Volunteer</a></li>
              <li><a href="/awareness">Awareness</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="rq-footer-box">
            <h5>Contact</h5>
            <p>Email: support@resqheart.org</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Bangalore, India</p>
          </div>

          {/* Column 4 */}
          <div className="rq-footer-box">
            <h5>Subscribe</h5>

            <form className="rq-newsletter">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Join</button>
            </form>

            <div className="rq-socials">
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