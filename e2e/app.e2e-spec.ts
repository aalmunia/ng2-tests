import { PrimeNGTutorialesPage } from './app.po';

describe('prime-ngtutoriales App', () => {
  let page: PrimeNGTutorialesPage;

  beforeEach(() => {
    page = new PrimeNGTutorialesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
