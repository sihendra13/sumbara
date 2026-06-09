import { Warehouse, Users, Ship, Leaf } from "lucide-react";
import { process, exportMarkets } from "./data";
import "./Capacity.css";

export default function Capacity() {
  return (
    <section id="capacity" className="capacity section" style={{ background: "var(--sand)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Supply capability</span>
          <h2 className="section-title">Built for bulk.<br />Ready to scale.</h2>
          <p className="section-sub">
            Over a decade of direct sourcing from Bima's farming communities ensures
            consistent, reliable supply for global buyers.
          </p>
        </div>

        <div className="capacity__cards">
          {[
            { icon: <Leaf size={22} />, value: "200–400 MT", label: "Monthly supply capacity", color: "var(--earth)" },
            { icon: <Warehouse size={22} />, value: "500+ MT", label: "Warehouse storage capacity", color: "var(--ocean)" },
            { icon: <Users size={22} />, value: "13 farmers", label: "Local supplier network, Bima", color: "var(--teal)" },
            { icon: <Ship size={22} />, value: "2 countries", label: "Active export destinations", color: "var(--ocean-mid)" },
          ].map(c => (
            <div key={c.label} className="cap-card">
              <div className="cap-card__icon" style={{ background: c.color + "18", color: c.color }}>{c.icon}</div>
              <p className="cap-card__value">{c.value}</p>
              <p className="cap-card__label">{c.label}</p>
            </div>
          ))}
        </div>

        <div className="process">
          <h3 className="process__title">From ocean to export container</h3>
          <div className="process__steps">
            {process.map((s, i) => (
              <div key={s.step} className="process__step">
                <div className="process__step-num">{s.step}</div>
                {i < process.length - 1 && <div className="process__line" />}
                <div className="process__step-body">
                  <p className="process__step-title">{s.title}</p>
                  <p className="process__step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="export-markets">
          <h3 className="process__title" style={{ marginBottom: 24 }}>Current export markets</h3>
          <div className="export-markets__grid">
            {exportMarkets.map(m => (
              <div key={m.country} className="market-card">
                <span className="market-card__flag">{m.flag}</span>
                <div>
                  <p className="market-card__country">{m.country}</p>
                  <p className="market-card__product">{m.product}</p>
                  <p className="market-card__use">{m.use}</p>
                </div>
              </div>
            ))}
            <div className="market-card market-card--open">
              <span className="market-card__flag">🌍</span>
              <div>
                <p className="market-card__country">Your market</p>
                <p className="market-card__use">Open for new partnerships</p>
                <a href="#inquiry" className="market-card__link">Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
