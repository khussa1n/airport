'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type Flight = {
  planned: string;
  actual: string;
  flight: string;
  destination?: string;
  origin?: string;
  status: string;
};

const departureData: Flight[] = [
  { planned: '02:15', actual: '02:15', flight: 'J2 054', destination: 'БАКУ', status: 'Отыруғызу' },
  {
    planned: '02:15',
    actual: '02:15',
    flight: 'KC 1054',
    destination: 'БАКУ',
    status: 'Отыруғызу',
  },
  { planned: '03:30', actual: '03:30', flight: 'QR 390', destination: 'ДОХА', status: 'Тіркеу' },
  { planned: '03:40', actual: '03:40', flight: 'FZ 1722', destination: 'ДУБАЙ', status: 'Тіркеу' },
];

const arrivalData: Flight[] = [
  { planned: '04:00', actual: '04:10', flight: 'J2 053', origin: 'БАКУ', status: 'Қонған' },
  { planned: '05:15', actual: '05:25', flight: 'KC 1053', origin: 'БАКУ', status: 'Қонған' },
  { planned: '06:30', actual: '06:35', flight: 'QR 389', origin: 'ДОХА', status: 'Қонған' },
  { planned: '07:40', actual: '07:50', flight: 'FZ 1721', origin: 'ДУБАЙ', status: 'Қонған' },
];

export default function Table() {
  const [searchQuery, setSearchQuery] = useState('');
  const [flights, setFlights] = useState<Flight[]>(departureData);
  const [activeTab, setActiveTab] = useState<'departure' | 'arrival'>('departure');

  useEffect(() => {
    if (activeTab === 'departure') {
      setFlights(departureData);
    } else {
      setFlights(arrivalData);
    }
  }, [activeTab]);

  const filteredFlights = flights.filter(
    (flight) =>
      flight.flight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (flight.destination &&
        flight.destination.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (flight.origin && flight.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
      flight.status.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex justify-between">
          <button
            onClick={() => setActiveTab('departure')}
            className={`w-1/2 py-2 text-center font-semibold ${
              activeTab === 'departure'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600'
            }`}
          >
            Ұшып кету
          </button>
          <button
            onClick={() => setActiveTab('arrival')}
            className={`w-1/2 py-2 text-center font-semibold ${
              activeTab === 'arrival'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600'
            }`}
          >
            Ұшып келу
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Іздеу"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-1 pl-8 border rounded outline-none border-green-500"
          />
          <svg
            className="absolute top-2 left-2 w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 3a6 6 0 100 12A6 6 0 009 3zM2 8a8 8 0 1114.32 5.906l4.387 4.387a1 1 0 01-1.415 1.415l-4.387-4.387A8 8 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
              <th className="py-2 px-2 text-left">Жоспарлы</th>
              <th className="py-2 px-2 text-left">Нақты</th>
              <th className="py-2 px-2 text-left">Рейс</th>
              {activeTab === 'departure' ? (
                <th className="py-2 px-2 text-left">Ұшып кету</th>
              ) : (
                <th className="py-2 px-2 text-left">Ұшып келу</th>
              )}
              <th className="py-2 px-2 text-left">Мәртебе</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-xs font-light">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-2 text-left">{flight.planned}</td>
                  <td className="py-2 px-2 text-left">{flight.actual}</td>
                  <td className="py-2 px-2 text-left whitespace-nowrap overflow-hidden">
                    {flight.flight}
                  </td>
                  {activeTab === 'departure' ? (
                    <td className="py-2 px-2 text-left">{flight.destination}</td>
                  ) : (
                    <td className="py-2 px-2 text-left">{flight.origin}</td>
                  )}
                  <td className="py-2 px-2 text-left">{flight.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-2 px-2 text-center text-gray-500">
                  Нәтиже табылмады
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <div className="mt-3 text-xs text-gray-500">Соңғы жаңалау: 29.05.2024 01:49</div>
          <Link
            href="flights"
            className="mt-3 w-fit py-1 px-2 text-xs bg-green-500 text-white rounded hover:bg-green-600"
          >
            Барлық рейстер
          </Link>
        </div>
      </div>
    </div>
  );
}
