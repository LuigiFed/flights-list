import { Injectable } from '@angular/core';
import flightsData from 'flights.json';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor() {}

  getAllVoli() {
    return flightsData.voli;
  }

  getVolo(numeroVolo: string) {
    return flightsData.voli.find(flight => flight.numero_volo === numeroVolo);
  }
}
