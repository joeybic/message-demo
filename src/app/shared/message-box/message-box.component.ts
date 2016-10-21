import {Component, OnInit, EventEmitter} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  @Input() message: string;
  @Input() index: number;

  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
    console.log('starting timer');
    setTimeout(((self: MessageBoxComponent) => {
      return () => {
        console.log('closing based on time constraints');
        self.close();
      };
    })(this), 3000);
  }

  close() {
    this.closed.emit({index: this.index});
  }
}
