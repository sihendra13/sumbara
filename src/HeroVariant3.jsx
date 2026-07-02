import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import "./Hero.css";

export default function HeroVariant3() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!videoRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });

      const duration = videoRef.current.duration;
      const newTime = x * duration;
      videoRef.current.currentTime = newTime;

      const isNearEnd = newTime / duration > 0.85;
      setShowContent(isNearEnd);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero hero--variant3">
      <video
        ref={videoRef}
        className="hero__video"
        src="/petani-rumput-laut.mp4"
        preload="metadata"
        muted
        playsInline
      />

      <div
        className={`container hero__content ${showContent ? "hero__content--visible" : ""}`}
        ref={contentRef}
        style={{
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
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
        Move mouse to explore & control video
      </div>
    </section>
  );
}
