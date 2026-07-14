import { Link } from 'react-router-dom';
import journalImg from '../assets/images/journal.png';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="book-image">
          <img src={journalImg} alt="Journal" />
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-tagline">
          OUT OF SPACE FOR STORING TRADITIONAL JOURNALS?
        </div>
        <Link to="/signup" className="hero-cta-btn" style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>
          Try <span>MOON</span>
        </Link>
        <div className="hero-cta-headoutline">
          Write freely. Heal gently.
        </div>
      </div>

    </div>
  )
}

export default HeroSection
