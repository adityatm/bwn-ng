import { Rental } from './../shared/rental.module';
import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService:RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRental();

    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
        
      },
      (err) => {
      },
      () => {

      });

  }

}
