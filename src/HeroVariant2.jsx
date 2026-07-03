import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import gsap from "gsap";
import "./Hero.css";

export default function HeroVariant2() {
  const videoRef = useRef(null);
  const tlRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const setupTimeline = () => {
      if (!video.duration) {
        requestAnimationFrame(setupTimeline);
        return;
      }

      const tl = gsap.timeline({ paused: true });
      tl.to({}, { duration: video.duration }, {
        onUpdate() {
          if (video.duration) {
            video.currentTime = tl.progress() * video.duration;

            const isNearEnd = video.currentTime / video.duration > 0.85;
            setShowContent(isNearEnd);
          }
        }
      });

      tlRef.current = tl;
    };

    video.addEventListener("loadedmetadata", setupTimeline);
    if (video.duration) setupTimeline();

    const handleMouseMove = (e) => {
      if (!tlRef.current || !video.duration) return;

      const progress = e.clientX / window.innerWidth;
      tlRef.current.progress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("loadedmetadata", setupTimeline);
    };
  }, []);

  return (
    <section className="hero hero--variant2">
      <video
        ref={videoRef}
        className="hero__video"
        src="/petani-rumput-laut.mp4"
        preload="metadata"
        muted
        playsInline
      />

      <div className={`container hero__content ${showContent ? "hero__content--visible" : ""}`}>
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
