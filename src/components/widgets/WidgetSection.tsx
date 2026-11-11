import type { ReactNode } from "react";
import type { IconName } from "../Icon";
import { Eyebrow, H2 } from "../ui";

/** A light grey band that holds an interactive widget, with a short heading above it. */
export function WidgetSection({ id, icon, label, title, intro, children }: { id: string; icon: IconName; label: string; title: ReactNode; intro?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 bg-[#EEF2F6] text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
          <div className="flex justify-center">
            <Eyebrow icon={icon} color="link">
              {label}
            </Eyebrow>
          </div>
          <H2>{title}</H2>
          {intro && <p className="mt-4 text-[15px] leading-[1.7] text-ink-body">{intro}</p>}
        </div>
        <div className="mx-auto max-w-[1040px]">{children}</div>
      </div>
    </section>
  );
}
