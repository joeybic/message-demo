import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _running: boolean = false;
  private _buttonText: string = "Start Messages";

  onMessageToggleClick() {
    this._running = !this._running;
  }

  get running(): boolean {
    return this._running;
  }

  get buttonText(): string {
    return this._buttonText;
  }

  set buttonText(buttonText: string) {
    this._buttonText = buttonText;
  }
}
