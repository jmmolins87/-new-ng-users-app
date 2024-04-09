import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = "https://gorest.co.in/public/v2/users"
  public token: string = "9d340a111e2c5f2ff594cff24fe31c5a96009e7d8b2723f7771285777464031b"

  constructor( private _http: HttpClient ) { }

  getUser(): Observable<any> {
    return this._http.get(`${ this.url }?access-token=${ this.token }`);
  }
}
