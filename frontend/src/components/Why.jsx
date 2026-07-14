import starImg from "../assets/images/cute little stars.png";
import "../styles/Why.css";

const Why = () =>{
  return(
    <div className="why-container">
      <div className="line-decor"></div>

      <div className="why-text">
        <h2>Why Moon exists?</h2>
        <p>
          Moon is a quiet space for reflection, emotions, and slowing down.
          Built for days when your thoughts feel heavy and the world feels loud.
          This is where you return to yourself.
        </p>
      </div>

      <div className="why-image">
        <img src={starImg}></img>
      </div>
    </div>
  )
}

export default Why