/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { MessageListComponent } from './message-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('Component: MessageList', () => {
  let fixture: ComponentFixture<MessageListComponent>;
  let list: MessageListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(MessageListComponent);
    list = fixture.debugElement.componentInstance;
  });

  it('should create an instance', () => {
    expect(list).toBeTruthy();
  });

  it('should have an app-message-box for each entry in the messages array', () => {
    list.messages = ['entry 1', 'entry 2'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-message-box').length).toBe(2);
  });

  it('should assign the correct text to each message box', () => {
    list.messages = ['entry 1', 'entry 2'];
    fixture.detectChanges();
    let actualMessages = [];
    fixture.debugElement.children[0].children.forEach((comp) => { actualMessages.push(comp.properties['message'])});
    expect(actualMessages).toEqual(list.messages);
  });

  it('should assign the correct index to each message box', () => {
    list.messages = ['entry 1', 'entry 2'];
    fixture.detectChanges();
    let actualIndexes = [];
    fixture.debugElement.children[0].children.forEach((comp) => { actualIndexes.push(comp.properties['index'])});
    expect(actualIndexes).toEqual([0, 1]);
  });

  it('removes the specified index when a message box is closed', () => {
    list.messages = ['entry 1', 'entry 2', 'entry 3'];
    fixture.detectChanges();
    fixture.debugElement.children[0].children[1].triggerEventHandler('closed', {index: 1});
    fixture.detectChanges();
    let remainingMessages = [];
    fixture.debugElement.children[0].children.forEach((comp) => { remainingMessages.push(comp.properties['message'])});
    expect(remainingMessages).toEqual(['entry 1', 'entry 3']);
  });

  it('reindexes remaining messages when a message is closed', () => {
    list.messages = ['entry 1', 'entry 2', 'entry 3'];
    fixture.detectChanges();
    fixture.debugElement.children[0].children[0].triggerEventHandler('closed', {index: 1});
    fixture.detectChanges();
    let remainingIndexes = [];
    fixture.debugElement.children[0].children.forEach((comp) => { remainingIndexes.push(comp.properties['index'])});
    expect(remainingIndexes).toEqual([0, 1]);
  });

  it('removes the first message bnox when an element expires', () => {
    list.messages = ['entry 1', 'entry 2', 'entry 3'];
    fixture.detectChanges();
    fixture.debugElement.children[0].children[1].triggerEventHandler('expired', null);
    fixture.detectChanges();
    let remainingMessages = [];
    fixture.debugElement.children[0].children.forEach((comp) => { remainingMessages.push(comp.properties['message'])});
    expect(remainingMessages).toEqual(['entry 2', 'entry 3']);
  });

  it('reindexes remaining messagesthe expired event is fired', () => {
    list.messages = ['entry 1', 'entry 2', 'entry 3'];
    fixture.detectChanges();
    fixture.debugElement.children[0].children[0].triggerEventHandler('expired', null);
    fixture.detectChanges();
    let remainingIndexes = [];
    fixture.debugElement.children[0].children.forEach((comp) => { remainingIndexes.push(comp.properties['index'])});
    expect(remainingIndexes).toEqual([0, 1]);
  })
});
