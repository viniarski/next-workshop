import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>That is a big change</h1>
        <p>Looks like o works fine!</p>
        <p>
          Doesn't matter if its h1 or p everything looks exactly the same! Where
          is the CSS?
        </p>
      </div>
    </main>
  );
}
