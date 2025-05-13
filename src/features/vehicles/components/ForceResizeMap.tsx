'use client';

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const ForceResizeMap = () => {
  const map = useMap();

  useEffect(() => {
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timeout);
  }, [map]);

  return null;
}
export default ForceResizeMap