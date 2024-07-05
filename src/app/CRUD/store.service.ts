import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public getStore() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl).subscribe(
        (res: any) => {
          resolve(res)
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public createStore(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiUrl, data).subscribe(
        (res: any) => {
         
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
