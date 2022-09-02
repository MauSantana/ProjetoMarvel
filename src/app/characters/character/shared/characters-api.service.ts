import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  API_URL = 'https://gateway.marvel.com/v1/public/'
  KEY = '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'characters' + this.KEY + '&limit=50')
      .pipe(map((data: any) => data.data.results))
  }
}