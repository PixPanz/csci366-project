import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private curUserSubject: BehaviorSubject<User>;
    public curUser: Observable<User>

    constructor(private http: HttpClient) {
        this.curUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('curUser')));
        this.curUser = this.curUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.curUserSubject.value;
    }

    login(name: string, pass: string) {
        return this.http.post<any>('localhost/users/authenticate', {name, pass}).pipe(map(user => {
            user.auth = window.btoa(name+':'+pass);
            localStorage.setItem('curUser', JSON.stringify(user));
            this.curUserSubject.next(user);
            return user;
        }))
    }

    logout() {
        localStorage.removeItem('curUser');
        this.curUserSubject.next(null);
    }
}