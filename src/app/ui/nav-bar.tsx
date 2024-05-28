'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const icon = '/Alalogo.png';

const nav = new Map<string, string>([
  ['БАСТАПҚЫ', '/'],
  ['БІЗ ЖАЙЫНДА', '/about'],
  ['ДЕМАЛЫС ТУРЛАРЫ', '/tours'],
  ['ӘУЕ КОМПАНИЯЛАРЫ', '/companies'],
  ['БАЙЛАНЫС', '/contact-us'],
]);

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full max-w-[1920px] flex justify-center ${
        scrollPosition > 8 ? 'fixed z-50 bg-stone-800' : 'absolute top-2'
      }`}
    >
      <div
        className={`flex justify-between items-center p-3 w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12 ${
          scrollPosition < 8 && 'bg-white bg-opacity-20'
        }`}
      >
        <Image width={170} height={70} src={icon} alt="Logo" className="w-[170px] object-center" />
        <ul className="flex gap-1 text-white text-xs">
          {Array.from(nav).map(([key, value]) => (
            <li key={key}>
              <Link href={value} className="p-3 hover:bg-white hover:bg-opacity-20">
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
