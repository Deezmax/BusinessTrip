import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URI } from '../../../common/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpClient: HttpClient) {}

  getVersion() {
    return this.httpClient.get(BASE_URI);
  }
}
