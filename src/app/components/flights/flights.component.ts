import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'app/shared/menu/menu.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FlightsFilterService } from 'app/services/filter/flights-filter.service';
import { HTTPService, Volo } from 'app/services/http.service';




@Component({
  selector: 'app-flights',
   imports: [CommonModule,MenuComponent,RouterLink,FooterComponent,FormsModule],
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  voli: Volo[] = [];
  searchText: any;
  searchFrom: any;
  searchTo: string = '';
  searchCarrier: string = '';
  searchFlightNumber: string = '';
  filteredFlights = this.voli;


  constructor(private flightsFilterService: FlightsFilterService,private httpService : HTTPService) {}

  ngOnInit() {
    // Al momento dell'inizializzazione, puoi decidere di mostrare tutti i voli
    this.voli = this.flightsFilterService.voli;
    this.httpService.getFlights().subscribe((data: Volo[]) => {
      this.voli = data;
    });
  }

  // Metodo per aggiornare i voli quando vengono filtrati
  updateVoli(filteredFlights: any[]) {
    this.voli = filteredFlights;



}

}

