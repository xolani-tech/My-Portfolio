import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import type { Project } from "@/types";

function hostOf(project: Project) {
  const url = project.liveUrl ?? project.githubUrl;
  if (!url) return project.title;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return project.title;
  }
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <SectionHeading title="Projects" headingId="projects-heading" />
      <div className="space-y-12">
        {projects.map((project, position) => {
          const primaryHref = project.liveUrl ?? project.githubUrl;
          return (
            <Reveal key={project.id} delay={position * 80}>
              <article className="group relative rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-surface sm:px-3">
                <div className="grid gap-4 sm:grid-cols-8 sm:gap-8">
                  <div className="sm:order-2 sm:col-span-6">
                    <h3 className="text-base font-medium leading-tight text-ink">
                      {primaryHref ? (
                        <a
                          href={primaryHref}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-accent"
                        >
                          {project.title}
                          <ArrowUpRight
                            className="size-4 shrink-0 translate-y-0.5 text-ink-muted transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent motion-reduce:transition-none"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>

                    {project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    )}

                    {(project.liveUrl || project.githubUrl) && (
                      <div className="mt-4 flex items-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} live demo`}
                            className="text-ink-muted transition-colors hover:text-accent"
                          >
                            <ExternalLink className="size-4" aria-hidden="true" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} source code`}
                            className="text-ink-muted transition-colors hover:text-accent"
                          >
                            <Github className="size-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="sm:order-1 sm:col-span-2">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full rounded border-2 border-line object-cover transition-colors duration-300 group-hover:border-accent/50"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex aspect-video w-full items-center justify-center rounded border-2 border-line px-2 text-center font-mono text-[10px] leading-tight text-ink-muted transition-colors duration-300 group-hover:border-accent/50"
                      >
                        {hostOf(project)}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
