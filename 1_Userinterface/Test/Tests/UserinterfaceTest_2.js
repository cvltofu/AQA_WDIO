import { expect } from 'chai';
import HomePage from '../PageOjects/HomePage.js';
import FirstCard from '../PageOjects/Card_1.js';
import JsonHandler from '../../Framework/Utils/JsonHandler.js';

describe('Userinterface', () => {
    before(() => {
        browser.url(JsonHandler.getBaseUrl());
    });

    it('Hide help form test', async () => {
        const homePage = new HomePage();
        const firstCard = new FirstCard();

        expect(await homePage.isFormOpen(), 'Home page is opened').to.be.true;

        homePage.clickOnLink();

        await firstCard.waitForFormOpen();

        expect(
            await firstCard.hideHelpAndCheckIsDisplayed(),
            'Help form is hidden'
        ).to.be.false;
    });
});
