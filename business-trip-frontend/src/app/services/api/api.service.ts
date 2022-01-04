import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URI } from '../../../common/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpClient: HttpClient) {}

  getVersion() {
    return this.httpClient.get(BASE_URI + 'arrayPostTest');
  }

  getVersion2() {
    const x = this.httpClient.get(BASE_URI + 'api');
    return x;
  }

  getVersion3() {
    return this.httpClient.get('/api');
  }

  getHome() {
    return this.httpClient.get('/hello/hello/5');
  }
}
