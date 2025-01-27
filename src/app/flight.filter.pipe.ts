import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightFilter'
})
export class FlightFilterPipe implements PipeTransform {
  transform(flights: any[], from: string, to: string, flightNumber: string): any[] {
    if (!flights) return [];

    return flights.filter(flight => {
      const matchesFrom = from ? flight.partenza.toLowerCase().includes(from.toLowerCase()) : true;
      const matchesTo = to ? flight.destinazione.toLowerCase().includes(to.toLowerCase()) : true;
      const matchesFlightNumber = flightNumber ? flight.numero_volo.includes(flightNumber) : true;

      return matchesFrom && matchesTo && matchesFlightNumber;
    });
  }
}
