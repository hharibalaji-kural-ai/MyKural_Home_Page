import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:opacity-50";

const variants = {
  primary:
    "bg-signal text-ink px-6 py-3 shadow-[0_0_0_0_rgba(91,141,239,0.25)] hover:shadow-[0_0_22px_4px_rgba(91,141,239,0.18)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-paper px-6 py-3 border border-signal/20 hover:border-signal/60 hover:bg-signal/5",
  pulse:
    "bg-pulse text-ink px-6 py-3 shadow-[0_0_0_0_rgba(91,141,239,0.25)] hover:shadow-[0_0_22px_4px_rgba(91,141,239,0.18)] hover:-translate-y-0.5",
  ghost: "bg-transparent text-mist hover:text-signal px-2 py-1",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
