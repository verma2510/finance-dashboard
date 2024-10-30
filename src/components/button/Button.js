import "./Button.css";

export default function Button({ type, className, icon: Icon, children }) {
  return (
    <button className={`button ${type} ${className}`}>
      {Icon && <Icon className="buttonIcon" />}
      {children}
    </button>
  );
}
