import moonImage from "../assets/images/flask with magic stars.png";
import "../styles/Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-left">
        <h2 className="features-heading">
          Everything you need to slow down and reflect.
        </h2>

        <div className="features-grid">
          <div className="feature pink">Daily Reflection</div>
          <div className="feature yellow">Multiple Views</div>
          <div className="feature pink">Affirmation</div>
          <div className="feature yellow">Dark Mode</div>
          <div className="feature pink">Emoticons</div>
          <div className="feature yellow">Mood Tracking</div>
        </div>
      </div>

      <div className="features-right">
        <img src={moonImage} alt="Flask" />
      </div>
    </div>
  );
};

export default Features;