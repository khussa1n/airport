import Image from 'next/image';
import PageHeader from '../ui/page-header';

const tours = new Map<string, string>([
  ['/Мальдивы.jpg', 'Мальдивы, Северный Мале Атолл'],
  ['/Египет.jpeg', 'Египет, Шарм-эль-Шейх'],
  ['/Турция.jpg', 'Турция, Кемер'],
  ['/Аланья.jpg', 'Турция, Аланья'],
  ['/Черногория.jpg', 'Черногория, Будва'],
  ['/ОАЭ.jpg', 'ОАЭ, Рас-эль-Хайма'],
]);

export default function Page() {
  return (
    <main>
      <PageHeader navName="Демалыс Туралары" linkName="Демалыс Туралары" />
      <div className="flex flex-col gap-20 justify-center items-center my-24 mx-auto lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-medium">Ең танымал демалыс турлары</h1>
          <p className="text-sm text-zinc-500">
            Демалуға саяхатқа шыққысы келген адамдарға арналған арнайы демалыс турлары
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {Array.from(tours).map(([key, value]) => (
            <div key={key} className="w-[280px] flex flex-col gap-5 bg-white shadow-lg">
              <Image src={key} alt={key} width={280} height={280} className="" />
              <h1 className="text-xl p-2 -mt-2">{value}</h1>
              <div className="w-full flex flex-col gap-4 p-2 text-zinc-500 text-xs">
                <div className="w-full flex justify-between">
                  <span className="whitespace-nowrap flex-shrink-0">күн уақыт</span>
                  <span className="whitespace-nowrap flex-shrink-0">
                    с 03.05 по 10.06 (7 ночей)
                  </span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="whitespace-nowrap flex-shrink-0">жиналу орны</span>
                  <span className="whitespace-nowrap flex-shrink-0">центр</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="whitespace-nowrap flex-shrink-0">питание</span>
                  <span className="whitespace-nowrap flex-shrink-0">2 мезгіл</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="whitespace-nowrap flex-shrink-0">1 адамға бағасы</span>
                  <span className="whitespace-nowrap flex-shrink-0">280 000 тг</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
