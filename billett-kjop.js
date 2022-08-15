// ==UserScript==
// @name         Samfundet-billett-kjop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://samfundet.no/*
// @icon         https://samfundet.no/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const email = "test@gmail.com";
    const cardNumber = "XXXXXXXXXXXXXXXX";
    const exp_month = "1";
    const exp_year = "25";
    const cvc = "123";

    new MutationObserver(function(mutations) {

    //Note - The number of tickets purchased must be selected manually due to a dynamic id on the input field.

    // Checks for a purchase button by class before executing, to prevent script-run before all fields are available.
    if (document.getElementsByClassName("payment-submit")[0]) {
        document.getElementById('ticket_type_paper').checked="checked";document.getElementById('email').value = email;document.getElementById('ccno').value = cardNumber;document.getElementById('exp_month').value=exp_month;document.getElementById('exp_year').value=exp_year;document.getElementById('cvc2').value=cvc;
        
        //TODO - uncomment below to auto-submit form
        //document.getElementsByClassName("payment-submit")[0].children[0].click();
    }
}).observe(document, {childList: true, subtree: true});
// the above observes added/removed nodes on all descendants recursively
})();