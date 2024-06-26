import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  statusData: any;
  selectedData: any;

  constructor(private http: HttpClient) {}

  data() {
    this.http.get('assets/data/covidData.json')
      .subscribe(data => {
        this.statusData = data;
        console.log(this.statusData);
      });
  }

  getSelectedData(): any {
    return this.selectedData;
  }

  select(item: any) {
    this.selectedData = item;
  }
}