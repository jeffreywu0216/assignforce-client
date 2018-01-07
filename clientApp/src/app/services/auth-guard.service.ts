import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

    constructor(public auth: AuthService, public router: Router) {}

    canActivate(): boolean {
	if (this.auth.getToken() === ''){
	    this.router.navigate(['']);
	    return false;
	}
	return true;
    }

}