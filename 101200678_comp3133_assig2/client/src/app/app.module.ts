import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {APOLLO_OPTIONS,  Apollo} from 'apollo-angular';
import { HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelsComponent } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    BookingsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    HttpLinkModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
     apollo.create({
      link: httpLink.create({ 
        uri:'http://localhost:4000/graphql',
    }),
      cache: new InMemoryCache()
    });
  }
 }
