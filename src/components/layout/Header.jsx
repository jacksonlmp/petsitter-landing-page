import { navItems } from "../../data/siteContent";
import Brand from "../ui/Brand";
import Button from "../ui/Button";

function Header() {
  return (
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
    </header>
  );
}

export default Header;
