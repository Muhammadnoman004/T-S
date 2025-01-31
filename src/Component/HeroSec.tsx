import BannerImg from "../assets/heroImg.jpg";
import RightArrow from "../assets/arrow.svg";

const HeroSec = () => {
  return (
    <section>
      <div className="img_wrapper">
        <img src={BannerImg} alt="" />
      </div>
      <div>
        <h1>YOUR PARTNER FOR SUSTAINED Success</h1>
        <p>
          A leading investment group, reflect the logo of “Made in Saudia” with
          great pride.
        </p>
      </div>
      <span>
        <img src={RightArrow} alt="" />
        <button>Find Out More</button>
      </span>
    </section>
  );
};

export default HeroSec;
