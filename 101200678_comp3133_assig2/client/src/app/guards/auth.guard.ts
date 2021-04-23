import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let url = state.url;
      let val = localStorage.getItem('isValidUser')

      if(val != null && val == 'true'){
        if(url == '/login'){
          return this.router.navigate(['/hotels']);
        }else{
          return true;
        }
      }else{
          return this.router.navigate(['/login']);
      }
  }

}
