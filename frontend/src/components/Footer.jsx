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
              <a href="#features"><li>Features</li></a>
              <a href="#pricing"><li>Why Moon</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#signup"><li>Sign up</li></a>
            </ul>
          </div>

          {/* <div className="footer-right">
            <h4>Support</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Contact</li>
              <li>Help Center</li>
            </ul>
          </div> */}
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