import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


  // URL of an exchange rates API called openrates
  private _url:string = 'https://api.openrates.io/latest?base=USD'


  //getting data using the HTTP module and observing it with Ovservable
  getRates():Observable<any> {
  return this.http.get(this._url)
}

}
