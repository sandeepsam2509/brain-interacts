import { workshopsPage as page } from "@/content/services";
import { ContentPage, pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function Page() {
  return <ContentPage page={page} />;
}
