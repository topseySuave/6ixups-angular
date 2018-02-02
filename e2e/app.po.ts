import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getBrandText() {
        return element(
            by.css(
                'app-root' +
                ' app-navbar' +
                ' nav.navbar-fixed.navbar' +
                ' div.nav-wrapper' +
                ' navbar-header.pad__20' +
                ' a.brand-logo span'
            )
        ).getText();
    }
}
