import { HeriPortfolioPage } from './app.po';

describe('heri-portfolio App', () => {
  let page: HeriPortfolioPage;

  beforeEach(() => {
    page = new HeriPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
