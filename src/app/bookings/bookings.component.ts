import { Component, OnInit } from '@angular/core';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  constructor() {}

  bookings = Bookings;

  ngOnInit(): void {}
}
