import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root'})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const curUser = this.authenticationService.currentUserValue;
        if (curUser) {
            return true;
        }

        this.router.navigate(['/'], {queryParams: {returnUrl:state.url}});
        return false;
    }
}