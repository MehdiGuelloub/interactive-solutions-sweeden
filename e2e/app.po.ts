import { browser, element, by } from 'protractor';

export class InteractiveSolutionsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('is-root h1')).getText();
  }
}
