import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  message!: string;
  constructor(private messageService: MessageService, private json: JsonService ,private router: Router) {}

  ngOnInit()
  {
    this.messageService.message.subscribe(message => this.message = message);
  }

  onSelect(record: any) {
    this.json.select(record);
    this.router.navigate(['/detail']);
  }

}
