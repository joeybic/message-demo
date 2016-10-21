/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture, async} from "@angular/core/testing";
import {MessageBoxComponent} from "./message-box.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {setTimeout} from "timers";

describe('Component: MessageBox', () => {
  let fixture: ComponentFixture<MessageBoxComponent>;
  let box: MessageBoxComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageBoxComponent
      ]
    });

    fixture = TestBed.createComponent(MessageBoxComponent);
    box = fixture.debugElement.componentInstance;
  });

  it('should create an instance', () => {
    expect(box).toBeTruthy();
  });

  it('has the message text in its message span', () => {
    const message = "THIS IS A MESSAGE";
    box.message = message;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#message').innerHTML).toEqual(message);
  });

  it('emits close event when close button is clicked', () => {
    let emitSpy = spyOn(box.closed, 'emit').and.stub();
    fixture.nativeElement.querySelector('#close-button').click();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
