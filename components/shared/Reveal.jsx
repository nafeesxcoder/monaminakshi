export default function Reveal({ children, className = "" }) {
  return <div className={`safe-reveal ${className}`.trim()}>{children}</div>;
}
