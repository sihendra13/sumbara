import { useState, useEffect } from "react";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";
import { certifications, impactStats, activityVideos } from "./data";
import "./CertImpact.css";

export function Certifications() {
  return (
    <section id="certifications" className="certs section">
      <div className="container">
        <div className="certs__layout">
          <div className="certs__left">
            <span className="section-eyebrow">Compliance & documents</span>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: 16 }}>
              Export-grade<br />documentation.
            </h2>
            <p className="section-sub" style={{ textAlign: "left", marginBottom: 32 }}>
              All products come with verifiable certifications and documentation
              required by international buyers in food, pharma, and industrial sectors.
            </p>
            <div className="certs__gate">
              <Lock size={16} />
              <span>Full document access available to verified buyers only.</span>
              <a href="#inquiry">Request access →</a>
            </div>
          </div>

          <div className="certs__right">
            {certifications.map(c => (
              <div key={c.name} className="cert-row">
                <div className={`cert-row__icon ${c.status === "verified" ? "cert-row__icon--verified" : "cert-row__icon--available"}`}>
                  {c.status === "verified" ? <CheckCircle size={18} /> : <Lock size={18} />}
                </div>
                <div className="cert-row__body">
                  <p className="cert-row__name">{c.name}</p>
                  <p className="cert-row__desc">{c.desc}</p>
                </div>
                <span className={`cert-row__badge ${c.status === "verified" ? "cert-row__badge--green" : "cert-row__badge--blue"}`}>
                  {c.status === "verified" ? "Verified" : "On request"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const [videoIdx, setVideoIdx] = useState(0);
  const [statIdx, setStatIdx] = useState(0);

  // Auto-play for photo carousel (4s)
  useEffect(() => {
    const statInterval = setInterval(() => {
      setStatIdx((prev) => (prev + 1) % impactStats.length);
    }, 4000);
    return () => clearInterval(statInterval);
  }, []);

  // Auto-play for video carousel (8s)
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setVideoIdx((prev) => (prev + 1) % activityVideos.length);
    }, 8000);
    return () => clearInterval(videoInterval);
  }, []);

  return (
    <section id="impact" className="impact section">
      <div className="container impact__content">
        
        {/* TOP ROW: Text & Video in iPhone */}
        <div className="impact__top-row">
          <div className="impact__text">
            <span className="section-eyebrow" style={{ color: "#7FDED9" }}>Community & sustainability</span>
            <h2 className="section-title" style={{ color: "#fff", textAlign: "left", marginBottom: 16 }}>
              From the ocean.<br />For the community.
            </h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,0.72)", textAlign: "left" }}>
              Every kilogram sourced supports the coastal farming families of Bima.
              We believe sustainable trade means the people behind the product benefit too.
            </p>
          </div>

          <div className="impact__carousel-container impact__carousel--video">
            <div className="landscape-video-container">
              {activityVideos.map((vid, idx) => (
                <video 
                  key={vid}
                  src={vid} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className={`impact__video ${idx === videoIdx ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="carousel-dots">
              {activityVideos.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === videoIdx ? 'active' : ''}`} 
                  onClick={() => setVideoIdx(i)} 
                  aria-label={`Go to video ${i + 1}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Photo Carousel & Text Details */}
        <div className="impact__bottom-row">
          <div className="impact__carousel-container impact__carousel--photo">
            <div className="impact__photo-carousel">
              {impactStats.map((s, idx) => (
                <div key={s.label} className={`impact-photo-slide ${idx === statIdx ? 'active' : ''}`}>
                  <img src={s.image} alt={s.label} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {impactStats.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === statIdx ? 'active' : ''}`} 
                  onClick={() => setStatIdx(i)} 
                  aria-label={`Go to photo ${i + 1}`} 
                />
              ))}
            </div>
          </div>

          <div className="impact__stat-details">
            <p className="impact-stat__value">{impactStats[statIdx].value}</p>
            <p className="impact-stat__label">{impactStats[statIdx].label}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
