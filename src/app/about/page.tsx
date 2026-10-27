import { aboutPage as page } from "@/content/company";
import { ContentPage, pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function Page() {
  return <ContentPage page={page} />;
}
