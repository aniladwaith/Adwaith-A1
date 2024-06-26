import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-updates',
  templateUrl: './covid-updates.component.html',
  styleUrls: ['./covid-updates.component.scss'],
})
export class CovidUpdatesComponent  implements OnInit {

  
  data: any;
  fdata: any;

  constructor(private http: HttpClient) {}

  find(id: number) {
    this.fdata = this.data.find((item:any) => item.pruid === id);
    console.log(this.fdata);
  }
  ngOnInit() {
    this.http.get<any[]>('assets/data/casesDeaths.json')
      .subscribe(data => {
        this.data = data;
        this.find(1);
      });
  }
}
