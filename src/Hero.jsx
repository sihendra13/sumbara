import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src="/petani-rumput-laut.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
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
    </section>
  );
}
