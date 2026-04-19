import { brand } from "../../data/siteContent";

function Brand({ className = "", href = "#home" }) {
  return (
    <a className={`brand ${className}`.trim()} href={href}>
      <span className="brand-mark">{brand.initials}</span>
      <span className="brand-text">{brand.name}</span>
    </a>
  );
}

export default Brand;
