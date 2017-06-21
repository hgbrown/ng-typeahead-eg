import { TypeaheadClientPage } from './app.po';

describe('typeahead-client App', () => {
  let page: TypeaheadClientPage;

  beforeEach(() => {
    page = new TypeaheadClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
