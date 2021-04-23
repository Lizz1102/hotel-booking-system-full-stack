import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AboutComponent } from './about/about.component';

import { HotelsComponent  } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'hotels',
    component: HotelsComponent ,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'bookings',
    component: BookingsComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent ,
  },
  {
    path: 'about',
    component: AboutComponent ,
    
  },
  {
    path: 'logout',
    component: LogoutComponent ,
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
