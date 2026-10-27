import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-32">
      <h1 className="text-h2 font-semibold">Page not found</h1>
      <p className="mt-4 text-secondary">The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/" className="mt-8 inline-block font-semibold text-green hover:underline">
        Back to home
      </Link>
    </section>
  );
}
