import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getCountries(arg: string) {
  	return this.http.get('https://restcountries.eu/rest/v1/name/' + arg);
  }

}
