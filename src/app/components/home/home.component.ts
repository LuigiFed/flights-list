import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'app/shared/menu/menu.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { BookingForm, Parcheggio, ParkingService } from 'app/services/parking.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [MenuComponent, CommonModule,FooterComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  parking : Parcheggio[] = [];
  bookingForm!: FormGroup;

  constructor (private parkingService : ParkingService, private fb : FormBuilder){}

  ngOnInit() : void {
     this.parkingService.getParking().subscribe((data: Parcheggio[]) => {
          this.parking = data;
  })

  // Creaazione del form reattivo, validators assicura che il campo non sia vuoto
  this.bookingForm = this.fb.group({
    entryDay: ['', Validators.required],       // Data di ingresso
    entryTime: ['', Validators.required],      // Ora di ingresso
    exitDay: ['', Validators.required],        // Data di uscita
    exitTime: ['', Validators.required],       // Ora di uscita
    promoCode: ['']                            // Codice promozionale (opzionale)
  });
  }

  onSubmit(): void {
    // Verifica se il form è valido
    if (this.bookingForm.valid) {
      // Se valido, raccogli i dati del form
      const formData: BookingForm = this.bookingForm.value;
      console.log('Dati del form:', formData);


  }



}

}
