import Link from 'next/link';
import { MainWrapper } from '../modules/common/components/main-wrapper/main-wrapper';

export default function Home() {
  return (
    <Link href='/todo'>
      <button>Start todo list</button>
    </Link>
  );
}
