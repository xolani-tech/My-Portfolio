interface SectionHeadingProps {
  title: string;
  headingId: string;
}

export default function SectionHeading({ title, headingId }: SectionHeadingProps) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 bg-canvas/75 px-6 py-5 backdrop-blur-md lg:sr-only">
      <h2 id={headingId} className="text-sm font-bold uppercase tracking-widest text-ink">
        {title}
      </h2>
    </div>
  );
}
