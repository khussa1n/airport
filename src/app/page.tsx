import { StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

const icon = '/peakpx.jpg';
const paragvai = '/paragvai.jpg';
const paris = '/paris.jpg';
const shrilanka = '/shrilanka.jpg';
const avatarIcon = '/avatar_icon.png';
const istock = '/duomo-fotor.jpg';

const tours = [
  {
    name: 'Арзан турлар',
    countries: [
      { value: 'Вьетнам', price: '150 000 тг' },
      { value: 'Грузия', price: '160 000 тг' },
      { value: 'Армания', price: '154 000 тг' },
      { value: 'Марокко', price: '130 000 тг' },
      { value: 'Черногория', price: '210 000 тг' },
      { value: 'Турция', price: '180 000 тг' },
    ],
  },
  {
    name: 'Қала турлар',
    countries: [
      { value: 'Рим, Италия', price: '230 000 тг' },
      { value: 'Париж, Франция', price: '350 000 тг' },
      { value: 'Венеция, Италия', price: '400 000 тг' },
      { value: 'Сан-Франциско, АҚШ', price: '270 000 тг' },
      { value: 'Нью-Йорк, АҚШ', price: '380 000 тг' },
      { value: 'Дубай', price: '250 000 тг' },
    ],
  },
  {
    name: 'Табиғатта демалу турлар',
    countries: [
      { value: 'Венеция, Италия', price: '280 000 тг' },
      { value: 'Будапешт, Венгрия', price: '580 000 тг' },
      { value: 'Прага, Чехия', price: '480 000 тг' },
      { value: 'Флоренция, Италия', price: '380 000 тг' },
      { value: 'М№нхен, Гурмания', price: '340 000 тг' },
      { value: 'Стамбул, Турция', price: '290 000 тг' },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <div
        className="w-full h-[800px] flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${icon})`,
        }}
      >
        <div className="w-full flex justify-between items-center px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
          <div className="text-white space-y-4">
            <p className="text-sm opacity-80">Сіздің саяхатыңызды сәтті өткізу үшін</p>
            <h1 className="text-5xl">БІЗДІҢ ӘУЕЖАЙ</h1>
          </div>
          <form className="bg-white w-[19rem] flex flex-col items-center px-8 py-8 text-xs text-zinc-600">
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Қайдан?</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Қайда?</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Бару күні:</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Қайту күні:</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Ересек адамдар саны:</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Балалар саны:</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Атыңыз:</label>
              <input className="w-full p-1" />
            </div>
            <div className="flex items-center gap-4 border-t py-2.5 w-full">
              <label className="whitespace-nowrap flex-shrink-0">Телефон номеріңіз:</label>
              <input className="w-full p-1" />
            </div>
            <button className="px-6 py-2.5 mt-1 bg-amber-400 text-sm w-fit text-white uppercase">
              Брондау
            </button>
          </form>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12 flex flex-col gap-32 mx-auto">
          <div className="w-full mt-24 mb-20">
            <div className="w-full text-center mb-16">
              <h1 className="text-4xl font-medium">Сұранысқа ие елді мекендер</h1>
              <p className="text-xs mt-3 text-zinc-500">
                Саяхат - бұл біздің ақыл-ойымыздың созылу тәсілі (Ральф Крошоу)
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <div className="relative">
                <Image
                  width={300}
                  height={197.66}
                  src={paragvai}
                  alt="Logo"
                  className="object-center"
                />
                <div className="absolute flex flex-col text-white top-20 left-[6rem] text-center">
                  <span className="font-medium">Таудағы өзен</span>
                  <span className="text-xs">Парагвай</span>
                </div>
              </div>
              <div className="relative">
                <Image width={300} height={150} src={paris} alt="Logo" className="object-center" />
                <div className="absolute flex flex-col text-white top-20 left-[6.5rem] text-center">
                  <span className="font-medium">Арман қала</span>
                  <span className="text-xs">Париж</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  width={300}
                  height={150}
                  src={shrilanka}
                  alt="Logo"
                  className="object-center"
                />
                <div className="absolute flex flex-col text-white top-20 left-[6rem] text-center">
                  <span className="font-medium">Бұлтты таулар</span>
                  <span className="text-xs">Шри Ланка</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-16">
            <div className="w-full text-center mb-20">
              <h1 className="text-4xl font-medium">Біз сізге ең арзан бағаларды ұсынамыз</h1>
              <p className="text-xs mt-3 text-zinc-500">
                Саяхат адамның барлық эмойияларын ұлғайтуға бейім (Питкр Хиг)
              </p>
            </div>
            <div className="flex justify-center gap-7">
              {tours.map((tour) => (
                <div key={tour.name} className="w-64 shadow-lg bg-white">
                  <div className="w-full p-4 font-medium text-sm text-center">{tour.name}</div>
                  <div className="border mx-4 border-yellow-200 mb-5" />
                  <div className="w-full">
                    {tour.countries.map((country) => (
                      <div
                        key={country.value}
                        className="w-full py-2 px-4 flex justify-between items-center hover:cursor-pointer hover:bg-zinc-100"
                      >
                        <span className="text-xs text-zinc-500">{country.value}</span>
                        <span className="text-xs px-2 py-1 border">{country.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mb-20">
            <div className="w-full text-center mb-20">
              <h1 className="text-4xl font-medium">Қолданушыларымыздың пікірлері</h1>
              <p className="text-xs mt-3 text-zinc-500">
                Кіннің шығуы мен батуы барб олардың ешқайсысын өткізіп алмаңыз
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center gap-7">
              <div className="max-w-lg p-4 shadow-lg bg-white flex justify-center gap-4">
                <div>
                  <Image
                    width={40}
                    height={40}
                    src={avatarIcon}
                    alt="Logo"
                    className=" rounded-full object-center"
                  />
                </div>
                <div>
                  <p className="w-80 xl:w-96 h-10 text-zinc-500 line-clamp-2 text-sm">
                    Отличный уютный аэропорт , особенно удобный вип зал , который можно оплатить
                    отдельно, ожидание рейса проходит комфортно и сотрудники буквально за руки взяли
                    и с сумками отнесли в минивей к самолету
                  </p>
                  <div>
                    <div className="pt-2 pb-1 font-medium">Алмақызы E.</div>
                    <div className="flex">
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-zinc-500" />
                      <StarIcon className="w-3 text-zinc-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-lg p-4 shadow-lg bg-white flex justify-center gap-4">
                <div>
                  <Image
                    width={40}
                    height={40}
                    src={avatarIcon}
                    alt="Logo"
                    className=" rounded-full object-center"
                  />
                </div>
                <div>
                  <p className="w-80 xl:w-96 h-10 text-zinc-500 line-clamp-2 text-sm">
                    Все удобно и современно, обменник на выходе из зелёной зоны справа, работает
                    круглосуточно, вроде как. . Такси советую заказывать в Яндексе, до города
                    далеко, у некоторых ребят с аэропорта есть приложения, которые работают как
                    таксометр, но накручивают нереальные суммы)) Ну и, если большой ажиотаж на
                    парковке,
                  </p>
                  <div>
                    <div className="pt-2 pb-1 font-medium">Гүлфайруз К.</div>
                    <div className="flex">
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                      <StarIcon className="w-3 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] flex items-center justify-center">
            <div className="w-full">
              <h1 className="text-4xl w-96 line-clamp-2 font-medium">
                Сұрағыңызға жауап таппадығыз ба?
              </h1>
              <p className="text-sm mt-4 mb-14 text-zinc-500">Бізге хат қалдырңыз</p>
              <Link href="/contact-us">
                <span className="px-6 py-2.5 bg-[#4F4610] text-white">БАЙЛАНЫСУ</span>
              </Link>
            </div>
            <div
              className="w-[960px]  h-[500px] left-1/2 overflow-hidden absolute flex justify-center items-center"
              style={{
                backgroundImage: `url(${istock})`,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
