import "./cards.scss";
import { FaRegStar } from "react-icons/fa";

function Cards({ author, title, date, imgSrc }) {
  return (
    <div className="cards-container">
      <div className="upper-container">
        <div className="upper-left">
          <img src={imgSrc} alt={`Album cover image :${title}`} />
        </div>
        <div className="upper-right">
          <h1>{author}</h1>
          <p>
            {title} ({date})
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="rating-container">
          <h2>Rate this album</h2>
        </div>
        <div className="stars-container">
          <FaRegStar className="star" />
          <FaRegStar className="star" />
          <FaRegStar className="star" />
          <FaRegStar className="star" />
          <FaRegStar className="star" />
        </div>
      </div>
    </div>
  );
}
export default Cards;
