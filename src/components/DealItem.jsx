const DealItem = ({ title, imgSrc, alt, oldPrice, newPrice }) => 
{
  return (
    <article className="pop">
      <h3>{title}</h3>
      <img src={imgSrc} alt={alt} />
      <p>
        <span className="old-price">${oldPrice}</span>
        <span className="new-price">${newPrice}</span>
      </p>
    </article>
  );
};

export default DealItem;
