type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  level?: "h1" | "h2";
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  level = "h2",
  centered = false,
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div className={`section-heading${centered ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <HeadingTag>{title}</HeadingTag>
      <p>{description}</p>
    </div>
  );
}
