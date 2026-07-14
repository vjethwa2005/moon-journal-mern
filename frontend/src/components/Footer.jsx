import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <h2>MOON</h2>
          <p>Write freely. Heal gently.</p>
          <p>
            Moon is a private digital journal designed to help you reflect,
            release, and reconnect with yourself — one page at a time.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Features</li>
              <li>Why Moon</li>
              <li>Pricing</li>
              <li>Sign up</li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Support</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Contact</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        <div className="footer-quote">
          “Every phase of you is worth writing about.”
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Moon Journal. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;