import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function PageNavLink({ name }: { name: string }) {
  return (
    <div className="w-full flex justify-center gap-2 text-xs text-white opacity-85">
      <Link href="/">Бастапқы бет</Link>
      <ArrowRightIcon className="w-3.5" />
      <span>{name}</span>
    </div>
  );
}
