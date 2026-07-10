import { Globe, MapPin, Anchor } from "lucide-react";
import "./GlobalFootprint.css";

export default function GlobalFootprint() {
  return (
    <section className="footprint section" id="footprint">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Global Export Footprint</h2>
          <p className="section__subtitle">
            Proven track record of supplying premium Indonesian commodities to major industrial hubs worldwide.
          </p>
        </div>

        <div className="footprint__map-container">
          {/* Decorative Map Background */}
          <div className="footprint__map-bg">
            <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1">
              <path d="M 200 200 Q 300 100 400 200 T 600 200 T 800 200" />
              <path d="M 100 300 Q 250 150 500 300 T 900 300" />
            </svg>
          </div>

          <div className="footprint__nodes">
            {/* Origin */}
            <div className="footprint__node footprint__node--origin">
              <div className="footprint__pin">
                <MapPin size={24} color="#2AA5A0" fill="rgba(42,165,160,0.2)" />
              </div>
              <div className="footprint__info">
                <h4>Indonesia (Bima)</h4>
                <p>Sourcing & Processing Origin</p>
                <span className="footprint__badge">Verified Source</span>
              </div>
            </div>

            {/* Destination 1 */}
            <div className="footprint__node footprint__node--dest1">
              <div className="footprint__pin">
                <Anchor size={20} color="#fff" />
              </div>
              <div className="footprint__info">
                <h4>China</h4>
                <p>Alginate & Industrial Use</p>
                <span className="footprint__badge footprint__badge--dest">Export Destination</span>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="footprint__node footprint__node--dest2">
              <div className="footprint__pin">
                <Anchor size={20} color="#fff" />
              </div>
              <div className="footprint__info">
                <h4>Tunisia</h4>
                <p>Carrageenan Industry</p>
                <span className="footprint__badge footprint__badge--dest">Export Destination</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footprint__stats">
          <div className="footprint__stat">
            <h3>Direct</h3>
            <p>From farmers to manufacturers</p>
          </div>
          <div className="footprint__stat">
            <h3>100%</h3>
            <p>Traceable supply chain</p>
          </div>
          <div className="footprint__stat">
            <h3>Zero</h3>
            <p>Middlemen markup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
