/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('App: MessageDemo', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should should start the messages when the button is clicked once', () => {
    document.getElementById('message-toggle').click();
    expect(app.running).toEqual(true);
  });

  it('should stop the messages when the button is clicked twice', () => {
    document.getElementById('message-toggle').click();
    document.getElementById('message-toggle').click();
    expect(app.running).toEqual(false);
  });

  it('has button text \"' + AppComponent.START_MESSAGES_BUTTON_TEXT + '\" when messages are not running', () => {
    expect(app.buttonText).toEqual(AppComponent.START_MESSAGES_BUTTON_TEXT);
  });

  it('has button text \"' + AppComponent.STOP_MESSAGES_BUTTON_TEXT + '\" when messages are running', () => {
    app._running = true;
    expect(app.buttonText).toEqual(AppComponent.STOP_MESSAGES_BUTTON_TEXT);
  });
});
