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
  @Output() expired: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit() {
    setTimeout(((self: MessageBoxComponent) => {
      return () => {
        self.expire();
      };
    })(this), 3000);
  }

  close() {
    this.closed.emit({index: this.index});
  }

  expire() {
    this.expired.emit();
  }
}
