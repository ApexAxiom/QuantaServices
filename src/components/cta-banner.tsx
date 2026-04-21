import Link from "next/link";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: {
    href: string;
    label: string;
  };
  secondary?: {
    href: string;
    label: string;
  };
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: CtaBannerProps) {
  return (
    <div className="cta-banner">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-row">
        <Link href={primary.href} className="button button-primary">
          {primary.label}
        </Link>
        {secondary ? (
          <Link href={secondary.href} className="button button-secondary">
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
