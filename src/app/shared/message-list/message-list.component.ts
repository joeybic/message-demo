import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: string[];

  constructor() { }

  ngOnInit() {
  }

  removeMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
