import { corporateBrainPage as page } from "@/content/platforms";
import { ContentPage, pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function Page() {
  return <ContentPage page={page} />;
}
