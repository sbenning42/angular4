import { SceenshotPage } from './app.po';

describe('sceenshot App', () => {
  let page: SceenshotPage;

  beforeEach(() => {
    page = new SceenshotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
