'use client';

import { useState } from 'react';
import PageHeader from '../ui/page-header';
import { PlusIcon } from '@heroicons/react/16/solid';

type Flight = {
  date: string;
  planned: string;
  actual: string;
  airline: string;
  destination: string;
  flightNumber: string;
  status: string;
};

const mockFlights: Flight[] = [
  {
    date: '28.05.2024',
    planned: '03:40',
    actual: '15:30',
    airline: 'flydubai',
    destination: 'ДУБАЙ',
    flightNumber: 'FZ 1722',
    status: 'CANCELLED',
  },
  {
    date: '29.05.2024',
    planned: '01:05',
    actual: '01:48',
    airline: 'IndiGo',
    destination: 'ДЕЛИ',
    flightNumber: '6E 1802',
    status: 'Отырғызу аяқталуда',
  },
  {
    date: '29.05.2024',
    planned: '02:15',
    actual: '02:15',
    airline: 'Azerbaijan Airlines',
    destination: 'БАКУ',
    flightNumber: 'J2 054',
    status: 'Отыруғызу',
  },
  {
    date: '29.05.2024',
    planned: '02:15',
    actual: '02:15',
    airline: 'air astana',
    destination: 'БАКУ',
    flightNumber: 'KC 1054',
    status: 'Отыруғызу',
  },
  {
    date: '29.05.2024',
    planned: '03:30',
    actual: '03:30',
    airline: 'Qatar Airways',
    destination: 'ДОХА',
    flightNumber: 'QR 390',
    status: 'Тіркеу',
  },
  {
    date: '29.05.2024',
    planned: '03:40',
    actual: '03:40',
    airline: 'flydubai',
    destination: 'ДУБАЙ',
    flightNumber: 'FZ 1722',
    status: 'Тіркеу',
  },
  {
    date: '29.05.2024',
    planned: '04:05',
    actual: '04:05',
    airline: 'REDWINGS',
    destination: 'КОЛЬЦОВО',
    flightNumber: 'WZ 1074',
    status: 'CANCELLED',
  },
  {
    date: '29.05.2024',
    planned: '04:10',
    actual: '04:10',
    airline: 'air astana',
    destination: 'ФРАНКФУРТ НА МАЙНЕ',
    flightNumber: 'KC 1648',
    status: 'Тіркеу',
  },
  {
    date: '29.05.2024',
    planned: '04:10',
    actual: '04:10',
    airline: 'Lufthansa',
    destination: 'ФРАНКФУРТ НА МАЙНЕ',
    flightNumber: 'LH 648',
    status: 'Тіркеу',
  },
];

export default function FlightsPage() {
  const [searchDate, setSearchDate] = useState('');
  const [searchDestination, setSearchDestination] = useState('');
  const [searchAirline, setSearchAirline] = useState('');

  const filteredFlights = mockFlights.filter(
    (flight) =>
      (searchDate === '' || flight.date.includes(searchDate)) &&
      (searchDestination === '' ||
        flight.destination.toLowerCase().includes(searchDestination.toLowerCase())) &&
      (searchAirline === '' || flight.airline.toLowerCase().includes(searchAirline.toLowerCase())),
  );

  return (
    <main>
      <PageHeader navName="Ұшып кету" linkName="Рейстер" />
      <div className="max-w-7xl mx-auto my-20 p-4 bg-white shadow-lg rounded-lg">
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Күні"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="p-2 border rounded w-32"
          />
          <input
            type="text"
            placeholder="Баратын орны"
            value={searchDestination}
            onChange={(e) => setSearchDestination(e.target.value)}
            className="p-2 border rounded flex-grow"
          />
          <input
            type="text"
            placeholder="Әуе компаниясы"
            value={searchAirline}
            onChange={(e) => setSearchAirline(e.target.value)}
            className="p-2 border rounded flex-grow"
          />
          <button className="p-2 bg-blue-500 text-white rounded">Іздеу</button>
          <span className="text-gray-500 text-xs">Соңғы жаңалау: 29.05.2024 02:06</span>
        </div>
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-xs leading-normal">
              <th className="py-2 px-2 text-left">Күні</th>
              <th className="py-2 px-2 text-left">Жоспарлы</th>
              <th className="py-2 px-2 text-left">Нақты</th>
              <th className="py-2 px-2 text-left">Әуе компаниясы</th>
              <th className="py-2 px-2 text-left">Баратын орны</th>
              <th className="py-2 px-2 text-left">Рейс №</th>
              <th className="py-2 px-2 text-left">Мәртебе</th>
              <th className="py-2 px-2 text-left">Сақтау</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-xs font-light">
            {filteredFlights.map((flight, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-2 text-left whitespace-nowrap overflow-hidden">
                  {flight.date}
                </td>
                <td className="py-2 px-2 text-left">{flight.planned}</td>
                <td className="py-2 px-2 text-left">{flight.actual}</td>
                <td className="py-2 px-2 text-left whitespace-nowrap overflow-hidden">
                  {flight.airline}
                </td>
                <td className="py-2 px-2 text-left whitespace-nowrap overflow-hidden">
                  {flight.destination}
                </td>
                <td className="py-2 px-2 text-left">{flight.flightNumber}</td>
                <td className="py-2 px-2 text-left">{flight.status}</td>
                <td className="py-2 px-2 text-left">
                  <button className="p-2 bg-green-500 text-white rounded">
                    <PlusIcon className="w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
