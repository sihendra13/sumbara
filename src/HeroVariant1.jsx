import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import "./Hero.css";

export default function HeroVariant1() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const timelineRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!videoRef.current) return;

      const x = e.clientX / window.innerWidth;
      const duration = videoRef.current.duration;
      const targetTime = x * duration;

      // Cancel previous animation
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      // Smooth animation with requestAnimationFrame
      const animate = () => {
        const diff = targetTime - timelineRef.current;
        const newTime = timelineRef.current + diff * 0.15; // Smooth easing

        videoRef.current.currentTime = newTime;
        timelineRef.current = newTime;

        const isNearEnd = newTime / duration > 0.85;
        setShowContent(isNearEnd);

        if (Math.abs(diff) > 0.01) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero hero--variant1">
      <video
        ref={videoRef}
        className="hero__video"
        src="/petani-rumput-laut.mp4"
        preload="metadata"
        muted
        playsInline
      />

      <div className={`container hero__content ${showContent ? "hero__content--visible" : ""}`} ref={contentRef}>
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

      <a href="#products" className="hero__scroll" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>

      <div className="hero__hint">
        Move mouse left/right to explore
      </div>
    </section>
  );
}
