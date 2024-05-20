'use client';

import { YMaps, Map, FullscreenControl, TypeSelector, ZoomControl } from '@pbe/react-yandex-maps';

const YandexMap = () => (
  <YMaps>
    <div>
      <Map
        style={{ width: '500px', height: '300px' }}
        defaultState={{ center: [43.35, 77.04], zoom: 13, controls: [] }}
      >
        <FullscreenControl />
        <TypeSelector />
        <ZoomControl />
      </Map>
    </div>
  </YMaps>
);

export default YandexMap;
