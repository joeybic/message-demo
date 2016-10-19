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

  it('should bind the button text to the buttonText field', () => {
    const buttonText = 'NEW UNEXPECTED BUTTON TEXT';
    app.buttonText = buttonText;
    fixture.detectChanges();
    expect(document.getElementById('message-toggle').innerText).toEqual(buttonText);
  });
});
