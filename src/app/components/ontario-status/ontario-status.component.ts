import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontario-status',
  templateUrl: './ontario-status.component.html',
  styleUrls: ['./ontario-status.component.scss'],
})
export class OntarioStatusComponent  implements OnInit {

  data: any;
  fdata: any;

  constructor(private http: HttpClient) {}

  find(id: number) {
    this.fdata = this.data.find((item:any) => item._id === id);
    console.log(this.fdata);
  }
  ngOnInit() {
    this.http.get<any[]>('assets/data/covidData.json')
      .subscribe(data => {
        this.data = data;
        this.find(35);
      });
  }
}
