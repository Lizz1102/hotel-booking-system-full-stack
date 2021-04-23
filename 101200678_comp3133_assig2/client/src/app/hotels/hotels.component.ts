import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {Hotel} from '../../../../server/models/hotel';
import {Booking} from '../../../../server/models/booking';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  data:Hotel[]= [];
  resp: any = {};
  data1:Booking[] = []
  resp1:any = {}
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.apollo.query({
      query: gql `{ hotel { hotel_id, hotel_name , street,city,postal_code,price,email,user_id} }`
    }).subscribe(res => {
      this.resp = res;
      this.data = this.resp.data.hotel;
      
    });
   

  }
  addBooking(){
    
  }
  
  }
