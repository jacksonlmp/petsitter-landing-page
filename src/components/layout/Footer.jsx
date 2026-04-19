import { footerContent } from "../../data/siteContent";
import Brand from "../ui/Brand";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Brand className="footer-brand" />
        <p>{footerContent.description}</p>
      </div>

      <div className="footer-links">
        {footerContent.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
