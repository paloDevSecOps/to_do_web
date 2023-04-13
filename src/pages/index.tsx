import Link from 'next/link';

export default function Home() {
  return (
    <Link href='/todo'>
      <button>Start todo list</button>
    </Link>
  );
}
