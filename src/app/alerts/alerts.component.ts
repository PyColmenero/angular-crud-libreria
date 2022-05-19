import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';    

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {  }

}
