import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HTTPService {

constructor(private http: HttpClient) { }

private url = 'https://localhost:7006/api/flight';

getFlights(): Observable<Volo[]> {
  return this.http.get<{ voli: Volo[], last_news: LastNews[] }>(this.url).pipe(
    map(response => response.voli)
  );
}
}

export interface Volo {
  partenza: string;
  destinazione: string;
  numero_volo: string;
  compagnia_aerea: string;
  check_in: string;
  gate: string;
  status: string;
  logo: string;
}

export interface LastNews {
  Title: string;
  Date: string;
  Description: string;
  Source: string;
}

export interface FlightData {
  Voli: Volo[];
  Last_news: LastNews[];
}



