import borderlands4 from "../images/borderlands42.avif";

const FeaturedDeal = () => {
  return (
    <section className="featured-deal">
      <h2>Deal of the Week</h2>
      <div className="featured-content">
        <img src={borderlands4} alt="Borderlands 4" />
        <div className="deal-info">
          <h3>Borderlands 4</h3>
          <p>
            <span className="old-price">$59.99</span>
            <span className="new-price">$39.99</span>
          </p>
          <p className="deal-expire">Deal ends SOON!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeal;