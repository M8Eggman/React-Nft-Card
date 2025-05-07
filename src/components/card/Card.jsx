import "./Card.css";
import view from "../../assets/images/icon-view.svg";
import eth from "../../assets/images/icon-ethereum.svg";
import clock from "../../assets/images/icon-clock.svg";
import userImg from "../../assets/images/image-avatar.png";

function Card() {
  return (
    <div className="card">
      <div className="cardHeader">
        <a href="">
          <img src={view} alt="" />
        </a>
      </div>
      <div className="cardBody">
        <a href="">Equilibrium #3429</a>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div>
          <p>
            <img src={eth} alt="" /> 0.041 ETH
          </p>
          <p>
            <img src={clock} alt="" /> 3 days left
          </p>
        </div>
      </div>
      <div className="cardFooter">
        <div>
          <img src={userImg} alt="" />
        </div>
        <p>
          Creation of <a href="">Jules Wyvern</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
