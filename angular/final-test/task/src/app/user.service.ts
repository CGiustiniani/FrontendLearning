import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<any | null>(null);

  constructor() { }

  setUser(user: any) {
    // TODO: implement this method 
  }

  getUser() {
    // TODO: implement this method 
  }

}