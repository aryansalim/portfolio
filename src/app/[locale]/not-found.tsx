import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[55vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <h1 className="font-serif text-6xl font-semibold text-teal">404</h1>
      <p className="text-muted">This page could not be found.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="btn btn-primary" href="/en">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/en/research">
          Research
        </Link>
      </div>
    </div>
  );
}
