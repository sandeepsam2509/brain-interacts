import type { Action } from "@/lib/types";
import { Motif } from "./BrandMark";
import { Actions, Container } from "./ui";

export function CtaBanner({ title, body, actions }: { title: string; body?: string; actions: Action[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-navy-800 to-navy-700 px-6 py-14 text-center sm:px-12 md:py-20">
          <Motif className="-bottom-24 -right-16 h-[260px] w-[390px]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/60 to-transparent" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-h2-sm font-semibold leading-[1.15] tracking-tight md:text-h2">{title}</h2>
            {body && <p className="mt-5 text-lead text-secondary">{body}</p>}
            <Actions actions={actions} className="mt-9 justify-center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
