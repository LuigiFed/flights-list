import { Injectable } from '@angular/core';
import flightsData from 'flights.json';

// Definiamo una tipizzazione per i voli
interface Flight {
  partenza: string;
  destinazione: string;
  numero_volo: string;
  compagnia_aerea: string;
  check_in: string;
  gate: string;
  status: string;
  logo: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlightsFilterService {
  voli: Flight[] = flightsData.voli; // Qui diciamo che `voli` è un array di tipo `Flight`

  constructor() {}

  // Metodo per filtrare i voli in base ai parametri passati
  filterFlights(from: string, to: string, carrier: string, flightNumber: string): Flight[] {
    console.log('Filtrando voli con:', from, to, carrier, flightNumber);

    // Filtro dei voli
    return this.voli.filter(voli => {
      const filters = [
        { value: from, condition: voli.partenza },
        { value: to, condition: voli.destinazione },
        { value: carrier, condition: voli.compagnia_aerea },
        { value: flightNumber, condition: voli.numero_volo }
      ];

      // Verifica se i voli soddisfano tutti i filtri
      return filters.every(filter =>
        !filter.value || (filter.condition && filter.condition.toLowerCase().includes(filter.value.toLowerCase()))
      );
    });
  }
}
