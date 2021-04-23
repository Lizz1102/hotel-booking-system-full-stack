import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Booking} from '../../../../server/models/booking';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  data:Booking[] = []
  resp:any = {}

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    
    this.apollo.query({
      query: gql `{ booking { booking_id, hotel_id, booking_date, booking_start, booking_end, user_id} }`
    }).subscribe(res => {
      this.resp = res;
      this.data = this.resp.data.booking;
    });
  }
 
  }