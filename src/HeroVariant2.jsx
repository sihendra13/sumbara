import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import "./Hero.css";

export default function HeroVariant2() {
  const [introFinished, setIntroFinished] = useState(false);

  // Cinematic Intro scroll fallback
  useEffect(() => {
    if (introFinished) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIntroFinished(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introFinished]);

  return (
    <section className={`hero ${introFinished ? 'hero--cinematic-visible' : 'hero--cinematic-hidden'}`}>
      <video
        className="hero__video"
        src="/indonesia-farmers.mp4"
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={(e) => {
          // Trigger intro after 3.5 seconds of playing, WITHOUT stopping the video loop
          if (e.target.currentTime > 3.5 && !introFinished) {
            setIntroFinished(true);
          }
        }}
      />

      <div className="hero__overlay" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Bima, West Nusa Tenggara, Indonesia
          </div>

          <h1 className="hero__headline">
            Premium Indonesian<br />
            <em>Seaweed</em>, Export-Ready.
          </h1>

          <p className="hero__sub">
            Sustainably harvested from Bima's coastal waters — supplying
            carrageenan and alginate industries globally since 2015.
          </p>

          <div className="hero__actions">
            <a href="#inquiry" className="btn btn--primary">Request Sourcing Access</a>
            <a href="#products" className="btn btn--ghost">View Products</a>
          </div>

          <div className="hero__stats">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-unit">{s.unit}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#products" className="hero__scroll" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
