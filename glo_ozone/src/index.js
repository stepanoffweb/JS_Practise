'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import goodsChange from './modules/goodsChange';
import actionPage from './modules/actionPage';


(async function(){
    const DB = await getData()
        renderCards(DB);
        renderCatalog();
        toggleCheckbox();
        toggleCart();
        goodsChange();
        actionPage();
}());


