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
          {/* Decorative Map Background & Connecting Lines */}
          <div className="footprint__map-bg">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
              {/* Line from Indonesia to China */}
              <path d="M 75 60 Q 85 45 85 30" fill="none" stroke="rgba(42,165,160,0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
              {/* Line from Indonesia to Tunisia */}
              <path d="M 75 60 Q 60 70 45 40" fill="none" stroke="rgba(42,165,160,0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
              
              {/* Decorative grid */}
              <g stroke="rgba(0,0,0,0.03)" strokeWidth="0.1">
                <line x1="0" y1="20" x2="100" y2="20" />
                <line x1="0" y1="40" x2="100" y2="40" />
                <line x1="0" y1="60" x2="100" y2="60" />
                <line x1="0" y1="80" x2="100" y2="80" />
                
                <line x1="20" y1="0" x2="20" y2="100" />
                <line x1="40" y1="0" x2="40" y2="100" />
                <line x1="60" y1="0" x2="60" y2="100" />
                <line x1="80" y1="0" x2="80" y2="100" />
              </g>
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
