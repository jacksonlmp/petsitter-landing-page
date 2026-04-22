import { useState } from "react";
import {
  FaBars,
  FaCamera,
  FaHouse,
  FaPaw,
  FaPhone,
  FaUser,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";
import { contactContent, navItems } from "../../data/siteContent";
import Brand from "../ui/Brand";
import Button from "../ui/Button";

const navIconMap = {
  home: FaHouse,
  about: FaUser,
  services: FaPaw,
  clients: FaCamera,
  contact: FaPhone,
};

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
          {navItems.map((item) => {
            const Icon = navIconMap[item.icon];

            return (
              <a className="nav-link" key={item.href} href={item.href}>
                {Icon ? <Icon className="nav-link-icon" /> : null}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="topbar-actions">
          <Button className="topbar-cta" href="#contact">
            Agendar agora
          </Button>
        </div>

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
            {navItems.map((item) => {
              const Icon = navIconMap[item.icon];

              return (
                <a className="mobile-nav-link" href={item.href} key={item.href} onClick={handleMenuClose}>
                  {Icon ? <Icon className="mobile-nav-link-icon" /> : null}
                  <span>{item.label}</span>
                </a>
              );
            })}
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
