'use client';

import PageHeader from '../ui/page-header';
import YandexMap from '../ui/map';
import { EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main>
      <PageHeader navName="Байланыс" linkName="Байланыс" />
      <div className="flex flex-col gap-12 justify-center items-start my-16 mx-auto lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="flex gap-10 w-full">
          <div style={{ width: '500px', height: '300px' }}>
            <YandexMap />
          </div>
          <div className="flex flex-col gap-4 text-xs text-zinc-500">
            <div className="flex gap-4">
              <HomeIcon className="w-7 text-amber-300" />
              <div className="flex flex-col justify-center gap-1">
                <span className="text-zinc-700">Қазақстан, Алматы</span>
                <span>Майлина 2</span>
              </div>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className="w-7 text-amber-300" />
              <div className="flex flex-col justify-center gap-1">
                <span>8 (7272) 70 33 33</span>
                <span>Дүйсенбі - Жұма</span>
              </div>
            </div>
            <div className="flex gap-4">
              <EnvelopeIcon className="w-7 text-amber-300" />
              <div className="flex flex-col justify-center gap-1">
                <span>info_ala@tav.aero</span>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Форма жіберілді');
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-5 items-start text-xs">
            <div className="flex flex-col gap-4">
              <input
                required
                placeholder="Атыңыз"
                className="w-80 p-3 border placeholder:text-zinc-500 outline-none"
              />
              <input
                required
                type="email"
                name="Email"
                placeholder="Email"
                className="w-80 p-3 border placeholder:text-zinc-500 outline-none"
              />
            </div>
            <textarea
              required
              placeholder="Хатыңыз"
              className="w-80 h-52 p-3 border placeholder:text-zinc-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 mt-1 bg-amber-400 text-sm w-fit text-white uppercase"
          >
            Жіберу
          </button>
        </form>
      </div>
    </main>
  );
}
