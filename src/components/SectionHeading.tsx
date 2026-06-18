// A reusable heading used at the top of each section.
// "Reusable component" = write the design once, use it many times.
export default function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean; // light = true when placed on a dark background
}) {
  return (
    <div className="mb-10 text-center">
      <p className={`divider-mark text-sm font-medium tracking-wide ${light ? "text-gold-light" : "text-saffron"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 font-display text-3xl font-semibold sm:text-4xl ${light ? "text-cream" : "text-maroon"}`}>
        {title}
      </h2>
    </div>
  );
}
