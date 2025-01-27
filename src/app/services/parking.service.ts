import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  saveBooking(formData: BookingForm) {
    throw new Error('Method not implemented.');
  }



  constructor(private http : HttpClient) { }

  private url =  'https://localhost:7006/api/flight';

getParking(): Observable<Parcheggio[]> {
  return this.http.get<{ parcheggio: Parcheggio[] }>(this.url).pipe(
    map(response => response.parcheggio)
  );
}



}

export interface Parcheggio{
     Parcheggio: any;
     Id : number;
     Nome : string;
     Capacita_totale : number;
     Posti_disponibili : number;
     Prezzo_orario : number;
     Tipo : string;
     Posizione : string;

}

export interface BookingForm {
  entryDay: string;
  entryTime: string;
  exitDay: string;
  exitTime: string;
  promoCode?: string;
}
