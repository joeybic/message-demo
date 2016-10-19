import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static readonly START_MESSAGES_BUTTON_TEXT: string = 'Start Messages';
  public static readonly STOP_MESSAGES_BUTTON_TEXT: string = 'Stop Messages';

  _running: boolean = false;

  onMessageToggleClick() {
    this._running = !this._running;
  }

  get running(): boolean {
    return this._running;
  }

  get buttonText(): string {
    if (this.running) {
      return AppComponent.STOP_MESSAGES_BUTTON_TEXT;
    }
    return AppComponent.START_MESSAGES_BUTTON_TEXT;
  }
}
