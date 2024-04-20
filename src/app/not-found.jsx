import Page from "@/components/Page";
import Link from "next/link";
export default function NotFound() {
  return (
    <Page title="Not Found">
      <p>Could not find requested resource</p>
      <Link href="/" className="text-gray-200">
        Return Home
      </Link>
    </Page>
  );
}
