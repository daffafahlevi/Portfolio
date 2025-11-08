import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <Link href="/blog" className="nav-link">
        Blog
      </Link>
      <Link href="/" className="nav-link">
        Portfolio
      </Link>
    </nav>
  );
}
