import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <SectionHeading title="Experience" headingId="experience-heading" />
      <div className="space-y-4">
        {experience.map((entry, position) => (
          <Reveal key={`${entry.period} ${entry.role}`} delay={position * 80}>
            <article className="rounded-r-md border-l-2 border-line py-5 pr-4 pl-6 transition-colors duration-300 hover:border-accent hover:bg-accent-glow">
              <p className="font-mono text-xs text-accent">{entry.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{entry.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {entry.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
