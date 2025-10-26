const NewsFooter = () => {
  return (
    <footer className="newsletter-section">
      <div className="newsletter-content">
        <h2>Subscribe to the PixelPort Newsletter</h2>
        <p>Stay updated with the latest news, deals, and game releases!</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default NewsFooter;
