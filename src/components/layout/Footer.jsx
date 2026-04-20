import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPaw,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { footerContent } from "../../data/siteContent";

function FooterInfoIcon({ type }) {
  const icons = {
    phone: FaPhone,
    whatsapp: FaWhatsapp,
    email: FaEnvelope,
    instagram: FaInstagram,
    navigation: FaPaw,
  };
  const Icon = icons[type];

  return <Icon aria-hidden="true" className="footer-title-icon" />;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-title">
            <FooterInfoIcon type="phone" />
            Contato
          </h3>
          <div className="footer-contact-list">
            {footerContent.contact.map((item) => (
              <a className="footer-contact-link" href={item.href} key={item.label}>
                <span className="footer-contact-accent">
                  <FooterInfoIcon type={item.icon} />
                </span>
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">
            <FooterInfoIcon type="navigation" />
            Navegacao
          </h3>
          <div className="footer-links">
            {footerContent.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-brand-line">{footerContent.brandLine}</p>
        <p className="footer-credit">{footerContent.legal.copyright}</p>
        <a className="footer-developer" href={footerContent.legal.developerHref}>
          <FaLinkedin aria-hidden="true" />
          {footerContent.legal.developerLabel}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
