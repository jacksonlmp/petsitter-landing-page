function Button({ href, children, variant = "primary", className = "" }) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} href={href}>
      {children}
    </a>
  );
}

export default Button;
