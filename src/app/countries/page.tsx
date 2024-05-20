import Image from 'next/image';
import PageHeader from '../ui/page-header';

const countries = [
  '/Мальдивы.jpg',
  '/Египет.jpeg',
  '/Турция.jpg',
  '/Аланья.jpg',
  '/Черногория.jpg',
  '/ОАЭ.jpg',
];

export default function Page() {
  return (
    <main>
      <PageHeader navName="Елді мекендер" linkName="Елдер" />
      <div className="flex flex-col gap-20 justify-center items-center my-24 mx-auto lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-medium">Ең танымал елдер</h1>
          <p className="text-sm text-zinc-500">
            Сіздің назарыңызға саяхатқа арналған ең танымал елдерді ұсынамыз
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {countries.map((country) => (
            <Image
              key={country}
              src={country}
              alt={country}
              width={280}
              height={280}
              className=""
            />
          ))}
        </div>
      </div>
    </main>
  );
}
