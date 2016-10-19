import { MessageDemoPage } from './app.po';

describe('message-demo App', function() {
  let page: MessageDemoPage;

  beforeEach(() => {
    page = new MessageDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
