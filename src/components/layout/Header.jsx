import { useState } from "react";
import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { contactContent, navItems } from "../../data/siteContent";
import Brand from "../ui/Brand";
import Button from "../ui/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="topbar">
        <Brand />
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="topbar-cta" href="#contact">
          Agendar agora
        </Button>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="mobile-menu-toggle"
          onClick={handleMenuToggle}
          type="button"
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <Brand />
            <button
              aria-label="Fechar menu"
              className="mobile-menu-close"
              onClick={handleMenuClose}
              type="button"
            >
              <FaXmark />
            </button>
          </div>

          <nav className="mobile-nav">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={handleMenuClose}>
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="mobile-menu-cta" href="#contact" variant="primary">
            Agendar agora
          </Button>
        </div>
      </div>

      <a className="mobile-whatsapp-fab" href={contactContent.cta.href}>
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Header;
