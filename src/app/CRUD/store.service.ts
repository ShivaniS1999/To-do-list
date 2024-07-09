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
          resolve({ ...res, status: true })

        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public getStoreDetailsById(id: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.apiUrl + `${id}`)
        .subscribe(
          (res: any) => {
            console.log(res);


            resolve({ ...res, status: true })

          },
          (error) => {
            reject(error);
          }
        );
    });
  }



  public updateStoreById(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.apiUrl + `${data.id}`, data).subscribe(
        (res: any) => {
          resolve({ ...res, status: true })
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public deleteStoreById(id: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiUrl + `${id}`).subscribe(
        (res: any) => {
          resolve({ ...res, status: true })
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
