import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Bridge } from '../bridge';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private url = 'Bridge/GetBridges'

  constructor(private http: HttpClient) { }

  getBridge(): Observable<Bridge[]> {
    return this.http.get<Bridge[]>(`${environment.apiUrl}/${this.url}`);
  }
}
