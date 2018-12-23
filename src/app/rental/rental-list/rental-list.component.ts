import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [];

  constructor(private rentalService:RentalService) { }

  ngOnInit() {
    this.rentals = this.rentalService.getRental();
  }

}
