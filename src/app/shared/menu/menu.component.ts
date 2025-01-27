import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import flightsData from 'flights.json';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlightsFilterService } from 'app/services/filter/flights-filter.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  searchFrom = '';
  searchTo = '';
  searchCarrier = '';
  searchFlightNumber = '';
  last_news = flightsData.last_news;


  @Output() voliFiltrati = new EventEmitter<any[]>();

  constructor(private flightsFilterService: FlightsFilterService) {}

  // Metodo chiamato quando l'utente preme "Search Flight"
  searchFlights() {
    // Passo i valori dei campi di ricerca al servizio
    const filteredFlights = this.flightsFilterService.filterFlights(
      this.searchFrom,
      this.searchTo,
      this.searchCarrier,
      this.searchFlightNumber
    );

    console.log(filteredFlights); // Mostra i voli filtrati

    // Emmetti i voli filtrati verso il componente genitore
    this.voliFiltrati.emit(filteredFlights);
  }
}
