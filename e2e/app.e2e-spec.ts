import { InteractiveSolutionsPage } from './app.po';

describe('interactive-solutions App', function() {
  let page: InteractiveSolutionsPage;

  beforeEach(() => {
    page = new InteractiveSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('is works!');
  });
});
