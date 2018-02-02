import {AppPage} from './app.po';

describe('sixups-angular App', () => {
    let page: AppPage;
    let result: string = '6ixups';

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display 6ixups title', () => {
        page.navigateTo();
        expect(page.getBrandText()).toEqual(result);
    });
});
