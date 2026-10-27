import { forms, type FormDef } from "@/lib/forms";
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";
import { CheckIcon, Container, Eyebrow } from "./ui";

// Two-column band: supporting content on the left, the enquiry form in a panel on the right.
export function FormPanel({
  form,
  title,
  id,
  children,
}: {
  form: FormDef["id"];
  title?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line/60 py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>{children}</Reveal>
        <Reveal delay={80}>
          <div className="rounded-3xl border border-line bg-navy-800/70 p-6 shadow-[0_30px_80px_-40px_rgba(59,181,232,0.35)] sm:p-8 md:p-10">
            <h2 className="mb-8 text-h3-sm font-semibold md:text-h3">{title ?? forms[form].title}</h2>
            <EnquiryForm id={form} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// Left-column checklist used beside a form.
export function FormAside({ eyebrow, title, items }: { eyebrow?: string; title: string; items: string[] }) {
  return (
    <div>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-h2-sm font-semibold leading-[1.15] tracking-tight md:text-h2">{title}</h2>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-secondary">
            <CheckIcon className="mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
