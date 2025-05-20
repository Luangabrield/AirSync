type PassengerWithCountries = {
    passenger_name: string;
    passenger_avatar: string;
    countries: string[];
  };
  
  type Passenger = {
    passenger_name: string;
    passenger_avatar: string;
    origin: string;
    destination: string;
  };
  
  const groupPassengersByPassenger = (passengers: Passenger[]): PassengerWithCountries[] => {
    const grouped: Record<string, PassengerWithCountries> = {};
  
    passengers.forEach((passenger) => {
      const { passenger_name, passenger_avatar, origin, destination } = passenger;
  
      if (!grouped[passenger_name]) {
        grouped[passenger_name] = {
          passenger_name,
          passenger_avatar,
          countries: [],
        };
      }
  
      if (!grouped[passenger_name].countries.includes(origin)) {
        grouped[passenger_name].countries.push(origin);
      }
      if (!grouped[passenger_name].countries.includes(destination)) {
        grouped[passenger_name].countries.push(destination);
      }
    });
  
    return Object.values(grouped);
  };
  
  export { groupPassengersByPassenger };