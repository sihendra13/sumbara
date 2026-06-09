import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Package } from "lucide-react";
import { products } from "./data";
import "./Products.css";

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.image} alt={product.name} className="product-card__img" />
        <span className="product-card__badge" style={{ background: product.color }}>
          {product.badge}
        </span>
      </div>

      <div className="product-card__body">
        <div className="product-card__header">
          <div>
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__aka">aka {product.aka}</p>
          </div>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__markets">
          {product.exportMarkets.map(m => (
            <span key={m} className="product-card__market-tag">
              <MapPin size={12} /> {m}
            </span>
          ))}
        </div>

        <button
          className="product-card__toggle"
          onClick={() => setExpanded(e => !e)}
          style={{ color: product.color }}
        >
          {expanded ? "Hide specifications" : "View specifications"}
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>

        {expanded && (
          <div className="product-card__specs">
            <div className="product-card__specs-grid">
              <div>
                <p className="specs-section-title">
                  <Package size={13} /> Specifications
                </p>
                {product.specs.map(s => (
                  <div key={s.label} className="spec-row">
                    <span className="spec-label">{s.label}</span>
                    <span className="spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="specs-section-title">Applications</p>
                <ul className="spec-apps">
                  {product.applications.map(a => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="#inquiry" className="product-card__cta" style={{ background: product.color }}>
              Request sample / pricing
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our products</span>
          <h2 className="section-title">Two species.<br />Global industries.</h2>
          <p className="section-sub">
            Sourced directly from coastal farming communities in Bima —
            processed to export-grade specifications for industrial applications worldwide.
          </p>
        </div>

        <div className="products__grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="products__note">
          <span>🔒</span>
          Full COA, pricing sheets and lab test results are available to verified buyers only.{" "}
          <a href="#inquiry">Request access →</a>
        </div>
      </div>
    </section>
  );
}
