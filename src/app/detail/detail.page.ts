import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detailData: any;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private jsonSer: JsonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.detailData = this.jsonSer.getSelectedData();

    this.messageService.message.subscribe(message => this.message = message);
  }

  sendMessage() {
    this.messageService.changeMessage("Updated");
  }

  nav() {
    this.router.navigate(['/tab2']);
  }

}
