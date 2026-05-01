import { createContext, useContext, useMemo, useState } from 'react';

const RideContext = createContext(null);

export function RideStoreProvider({ children }) {
  const [ride, setRide] = useState({
    pickup: 'City Center',
    dropoff: 'Airport Terminal 1',
    vehicle: 'Premium Sedan',
    etaMinutes: 12,
    driver: 'Aman Verma',
    remainingKm: 3.8,
  });

  const value = useMemo(
    () => ({
      ride,
      updateRide: (patch) => setRide((current) => ({ ...current, ...patch })),
    }),
    [ride],
  );

  return <RideContext.Provider value={value}>{children}</RideContext.Provider>;
}

export function useRideStore() {
  const context = useContext(RideContext);
  if (!context) throw new Error('useRideStore must be used inside RideStoreProvider');
  return context;
}
