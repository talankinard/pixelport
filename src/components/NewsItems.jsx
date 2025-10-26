import pixelportLogo from "../images/pixelport.png";
import gamerel from "../images/gamerel.jpg";
import teamwork from "../images/teamwork.jpg";

const NewsItems = () => {
  return (
    <div className="news-page">
      <div className="news-left">
        <h2>News</h2>
      </div>

      <div className="news-right">
        <article className="news-item">
          <img src={pixelportLogo} alt="PixelPort update" />
          <h3>Exciting Update for PixelPort Users</h3>
          <p>
            We've been hard at work upgrading your PixelPort experience! This
            update brings both style improvements and new features to make
            browsing and buying games feel smoother than ever.
          </p>
        </article>

        <article className="news-item">
          <img src={gamerel} alt="New game releases" />
          <h3>New Game Releases This Month</h3>
          <p>
            Stay up to date with the freshest titles hitting the market. From
            blockbuster AAA adventures to innovative indie gems, PixelPort keeps
            you in the loop with the latest arrivals. Discover what's hot right
            now, compare prices, and find your next favorite game the moment it
            launches.
          </p>
        </article>

        <article className="news-item">
          <img src={teamwork} alt="Behind the scenes" />
          <h3>Behind the Scenes at PixelPort</h3>
          <p>
            Take a peek at the passion and teamwork that power PixelPort - from
            coding and design to the ideas that bring our marketplace to life.
          </p>
        </article>
      </div>
    </div>
  );
};

export default NewsItems;
