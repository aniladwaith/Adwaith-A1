import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new BehaviorSubject<string>("Hii");
  message = this.messageSource.asObservable();

  constructor() { }

  changeMessage(msg: string) 
  {
    this.messageSource.next(msg);
  }
}
