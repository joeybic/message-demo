import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static readonly START_MESSAGES_BUTTON_TEXT: string = 'Start Messages';
  public static readonly STOP_MESSAGES_BUTTON_TEXT: string = 'Stop Messages';
  public static readonly QUOTES: string[] = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
  ];

  private static getRandomQuote() {
    return AppComponent.QUOTES[Math.round(Math.random() * (AppComponent.QUOTES.length - 1))];
  }

  running: boolean = false;
  private messages: string[] = [];

  private loopHandle: any;

  onMessageToggleClick() {
    console.log('message toggle click');
    this.running = !this.running;
    console.log('now im running?' + this.running);
    if (this.running) {
      this.loopHandle = setTimeout(((self: AppComponent) => {
        return () => {
          self.loop(self);
        }
      })(this), 500);
    }
  }

  get buttonText(): string {
    if (this.running) {
      return AppComponent.STOP_MESSAGES_BUTTON_TEXT;
    }
    return AppComponent.START_MESSAGES_BUTTON_TEXT;
  }

  private loop(self) {
    console.log("looping");
    console.log('still running? ' + self.running);
    if (!self.running) {
      console.log('no longer running. stopping');
      self.loopHandle = null;
      return;
    }

    self.messages.push(AppComponent.getRandomQuote());
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    self.loopHandle = setTimeout(((self: AppComponent) => {
      return () => {
        self.loop(self);
      }
    })(this), rand);
  }
}
