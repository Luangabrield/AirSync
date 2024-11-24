type Passenger = {
    id: number;
    passenger_name: string;
    passenger_avatar: string;
    origin: string;
    destination: string;
  };
  
  type GroupedPassenger = {
    title: string;
    data: Passenger[];
  };
  
  const groupPassengersByCountry = (passengers: Passenger[]): GroupedPassenger[] => {
    const countries: Record<string, Passenger[]> = {};
  
    passengers.forEach((passenger) => {
      if (!countries[passenger.origin]) {
        countries[passenger.origin] = [];
      }
      countries[passenger.origin].push(passenger);
  
      if (!countries[passenger.destination]) {
        countries[passenger.destination] = [];
      }
      countries[passenger.destination].push(passenger);
    });
  
    const groupedData = Object.entries(countries)
      .map(([country, passengers]) => ({
        title: `${country} (${passengers.length})`,
        data: passengers,
      }))
      .sort((a, b) => a.title.localeCompare(b.title)); 
  
    return groupedData;
  };
  
  export default groupPassengersByCountry;
  