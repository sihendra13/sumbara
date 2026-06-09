import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import "./Inquiry.css";

export default function Inquiry() {
  const [form, setForm] = useState({
    company: "", name: "", email: "", country: "",
    industry: "", product: "", quantity: "", port: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="inquiry section">
      <div className="container">
        <div className="inquiry__layout">
          <div className="inquiry__left">
            <span className="section-eyebrow">Get started</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Ready to source<br />from Indonesia?
            </h2>
            <p className="section-sub" style={{ textAlign: "left", marginBottom: 36 }}>
              Submit your sourcing details and we'll respond within 24 hours
              with pricing, availability, and sample arrangements.
            </p>

            <div className="inquiry__trust">
              {[
                "Verified buyers receive full COA and pricing sheet",
                "Sample requests accommodated for qualified buyers",
                "Response within 24 hours on business days",
              ].map(t => (
                <div key={t} className="inquiry__trust-item">
                  <CheckCircle size={15} style={{ color: "var(--teal)", flexShrink: 0 }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="inquiry__contact">
              <p className="inquiry__contact-label">Direct contact</p>
              <a href="tel:+62xxxxxxxxxx" className="inquiry__contact-link">+62 xxx-xxxx-xxxx</a>
              <a href="mailto:hello@kayuwangi.id" className="inquiry__contact-link">
                hello@kayuwangi.id
              </a>
            </div>
          </div>

          <div className="inquiry__right">
            {submitted ? (
              <div className="inquiry__success">
                <CheckCircle size={48} style={{ color: "var(--teal)" }} />
                <h3>Request received</h3>
                <p>We'll review your inquiry and get back to you within 24 hours with sourcing details and document access.</p>
              </div>
            ) : (
              <form className="inquiry__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company name *</label>
                    <input required placeholder="Your company" value={form.company} onChange={set("company")} />
                  </div>
                  <div className="form-group">
                    <label>Your name *</label>
                    <input required placeholder="Full name" value={form.name} onChange={set("name")} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Business email *</label>
                    <input required type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <input required placeholder="Country" value={form.country} onChange={set("country")} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Industry / application *</label>
                    <select required value={form.industry} onChange={set("industry")}>
                      <option value="">Select industry</option>
                      <option>Food manufacturer</option>
                      <option>Carrageenan / hydrocolloid processing</option>
                      <option>Alginate production</option>
                      <option>Pharmaceutical / nutraceutical</option>
                      <option>Cosmetics</option>
                      <option>Animal feed</option>
                      <option>Trading / distribution</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Product of interest *</label>
                    <select required value={form.product} onChange={set("product")}>
                      <option value="">Select product</option>
                      <option>Eucheuma Cottonii</option>
                      <option>Sargassum</option>
                      <option>Both</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Estimated quantity (MT/month)</label>
                    <input placeholder="e.g. 20 MT/month" value={form.quantity} onChange={set("quantity")} />
                  </div>
                  <div className="form-group">
                    <label>Target delivery port</label>
                    <input placeholder="e.g. Port of Hamburg" value={form.port} onChange={set("port")} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Additional notes</label>
                  <textarea rows={3} placeholder="Specific grade requirements, timeline, or questions..." value={form.message} onChange={set("message")} />
                </div>
                <button type="submit" className="inquiry__submit">
                  <Send size={16} />
                  Submit sourcing request
                </button>
                <p className="inquiry__note">
                  Your information is used solely to verify your buyer status and respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
