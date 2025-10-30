import React, { useState, useEffect } from "react";
import stormfour from "../images/stormfour.png";
import borderlands4 from "../images/borderlands42.avif";
import outerwilds from "../images/outerwilds.webp";
import rust from "../images/rust.jpg";
import alanwaketwo from "../images/alanwaketwo.png";
import "../css/FeaturedDeal.css";

const featuredSlides = [
  {
    title: "Borderlands 4",
    img: borderlands4,
    desc: "The chaotic looter-shooter returns with more mayhem than ever.",
  },
  {
    title: "Storm Connections 4",
    img: stormfour,
    desc: "Relive iconic anime battles in stunning high definition.",
  },
  {
    title: "Outer Wilds",
    img: outerwilds,
    desc: "Explore a beautifully mysterious solar system trapped in a time loop.",
  },
  {
    title: "Rust",
    img: rust,
    desc: "Survive, build, and dominate in this intense multiplayer experience.",
  },
  {
    title: "Alan Wake II",
    img: alanwaketwo,
    desc: "Step back into the darkness with one of the most cinematic thrillers ever made.",
  },
];

const FeaturedDeal = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="featured-deal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2>Featured Games</h2>

      <div className="featured-slideshow">
        {featuredSlides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="deal-info">
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/*"Chat help for dots"*/}
      <div className="slideshow-dots">
        {featuredSlides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDeal;
