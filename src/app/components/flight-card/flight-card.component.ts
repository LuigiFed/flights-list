import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'app/shared/menu/menu.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { FlightService } from 'app/services/flight.service';

@Component({
  selector: 'app-flight-card',
  imports: [CommonModule,MenuComponent,FooterComponent],
  styleUrls: ['./flight-card.component.scss'],
  templateUrl: './flight-card.component.html',
})
export class FlightCardComponent implements OnInit {
  volo: any;

  constructor(private route: ActivatedRoute, private flightService: FlightService) {}

  ngOnInit() {
    const numeroVolo = this.route.snapshot.paramMap.get('numero_volo');

    if (numeroVolo) {
      this.volo = this.flightService.getVolo(numeroVolo);
    } else {
      console.error('Nessun numero di volo trovato nel parametro della route');

    }
  }
}

