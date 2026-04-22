import brandIcon from "../../assets/images/icone-petsitter.png";
import { brand } from "../../data/siteContent";

function Brand({ className = "", href = "#home" }) {
  return (
    <a className={`brand ${className}`.trim()} href={href}>
      <span className="brand-mark">
        <img alt={`${brand.name} icone`} className="brand-mark-image" src={brandIcon} />
      </span>
    </a>
  );
}

export default Brand;
