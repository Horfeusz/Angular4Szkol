import { MyTest3Page } from './app.po';

describe('my-test3 App', () => {
  let page: MyTest3Page;

  beforeEach(() => {
    page = new MyTest3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
