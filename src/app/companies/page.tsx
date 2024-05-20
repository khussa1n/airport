import Image from 'next/image';
import PageHeader from '../ui/page-header';

const companies = new Map<string, string>([
  ['/air-astana.jpeg', 'Air Astana'],
  ['/asiana-airlines.jpg', 'Asiana Airlines'],
  ['/turkish-airlines.jpg', 'Turkish Airlines'],
]);

export default function Page() {
  return (
    <main>
      <PageHeader navName="Әуе компаниялары" linkName="Әуе компаниялары" />
      <div className="flex flex-col gap-20 justify-center items-center my-24 mx-auto lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-medium">Қазақстандағы ең танымал әуе компаниялары</h1>
          <p className="text-sm text-zinc-500"></p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {Array.from(companies).map(([key, value]) => (
            <div key={key} className="w-[300px] flex flex-col gap-5 bg-white shadow-lg">
              <Image src={key} alt={key} width={300} height={280} className="" />
              <h1 className="text-xl p-2 -mt-2">{value}</h1>
              <div className="w-full flex flex-col gap-4 p-2 text-zinc-500 text-xs">
                <p className="">
                  Код-шеринг (ағылшын тілінде code-share) – екі немесе бірнеше әуекомпания бір
                  бағытта бірлесіп атқаратын әуерейс. Код-шеринг келісімшарты бойынша бір
                  әуекомпания рейсті орындайды, яғни тасымалдаушы әуекомпания болып табылады, ал
                  басқа әуекомпаниялар серіктестер ретінде бұл рейске әуебилет сатады.
                </p>
                <p className="">
                  Әуекомпаниялар арасындағы келісімшарттың басқа форматы – жолаушыларды және олардың
                  жолжүгін өтпелі тіркеу жөніндегі келісімшарт. Егер жолаушының сапары Air Astana
                  әуекомпаниясының төменде көрсетілген бір немесе бірнеше серіктес тасымалдаушымен
                  орындалатын бір немесе бірнеше ұшу сегментінен тұратын болса, жолаушыны және оның
                  жолжүгін тіркеу сапардың соңғы пунктіне дейін орындалады.
                </p>
                <p className="">
                  Жолжүкті жолаушы сапарының соңғы пунктіне дейін тіркеу Phuket (HKT), Lampang
                  (LPT), Sukhothai (THS) әуежайларында қолжетімді емес.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
