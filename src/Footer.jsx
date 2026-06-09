import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "./data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>🌿</span>
              <span className="footer__logo-text">{company.shortName}</span>
            </div>
            <p className="footer__tagline">{company.tagline}</p>
            <p className="footer__role">{company.role}</p>
            <p className="footer__desc">
              {company.name} — connecting Indonesia's premium natural commodities
              to global industries through verified supplier partnerships.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Commodities</p>
            <a href="#products">Eucheuma Cottonii</a>
            <a href="#products">Sargassum</a>
            <a href="#certifications">Certifications</a>
            <a href="#inquiry">Request Sample</a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Company</p>
            <a href="#capacity">Supply Capacity</a>
            <a href="#impact">Sustainability</a>
            <a href="#inquiry">Contact Us</a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Contact</p>
            <div className="footer__contact-item">
              <MapPin size={13} />
              <span>{company.location}</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={13} />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </div>
            <div className="footer__contact-item">
              <Mail size={13} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="footer__contact-item">
              <span style={{fontSize:13}}>📸</span>
              <a href={`https://instagram.com/${company.instagram}`} target="_blank" rel="noopener">@{company.instagram}</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p className="footer__haccp">Digital Sourcing Hub · Sleman, Yogyakarta · Indonesia</p>
        </div>
      </div>
    </footer>
  );
}