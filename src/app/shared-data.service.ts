import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  sharedData: any;

  constructor() { }

  setData(data: any) {
    this.sharedData = data;
    localStorage.setItem('name', this.sharedData)
    console.log(this.sharedData);

  }

  getData() {
    console.log('in get', this.sharedData);
    if (!this.sharedData) {

      return localStorage.getItem('name')
    }
    else {
      return this.sharedData;
    }
  }
}
