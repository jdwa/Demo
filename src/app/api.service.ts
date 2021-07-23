import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'assets/data/flare.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getflare() {
    return this.http.get(localUrl);
  }
}
