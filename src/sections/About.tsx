import { about } from "@/data/about";
import InlineText from "@/components/InlineText";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading title="About" headingId="about-heading" />
      <Reveal delay={100}>
        <div className="max-w-2xl space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              <InlineText text={paragraph} />
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
