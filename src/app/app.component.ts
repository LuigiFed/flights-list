import { CommonModule } from '@angular/common';
import { Component, HostListener, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTPService, Volo } from './services/http.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flights-list';
voli: Volo[] = [];

constructor(private httpService : HTTPService) {}

ngOnInit() {

  this.httpService.getFlights().subscribe((data: Volo[]) => {
    this.voli = data;
  });
}

  isVisible = false;

  //Freccia di scroll da fine pagina ad inizio pagina
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300; // Mostra la freccia se si scorre più di 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

