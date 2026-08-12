import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left mx-0" : "items-center text-center mx-auto";

  return (
    <div className={`flex flex-col max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] text-signal">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-paper">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base sm:text-lg text-mist leading-relaxed">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
