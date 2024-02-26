import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
