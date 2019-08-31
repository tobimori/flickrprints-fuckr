// ==UserScript==
// @name         Flickr Prints Fucker
// @namespace    https://github.com/tobimori/
// @version      1.0
// @description  Removes Flickr Prints advertising button in navbar and picture viewer
// @author       tobimori
// @downloadURL  https://raw.githubusercontent.com/tobimori/flickrprints-fuckr/master/flickrprintsfuckr.user.js
// @updateURL    https://raw.githubusercontent.com/tobimori/flickrprints-fuckr/master/flickrprintsfuckr.user.js
// @match        https://*.flickr.com/*
// @require 	 https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var oldUrl = "none";

document.getElementsByClassName("gn-create")[0].remove();

var observer = new MutationObserver(function (mutations, me) {
    if (document.getElementsByClassName("view print-button-view")[0] !== undefined) {
        while (document.getElementsByClassName("view print-button-view")[0]) {
            document.getElementsByClassName("view print-button-view")[0].remove();
        };
        return;
    };
});

var navbar = new MutationObserver(function (mutations, me) {
	if (oldUrl == document.URL) return;
    if (document.getElementsByClassName("gn-create")[0] !== undefined) document.getElementsByClassName("gn-create")[0].remove();
});

navbar.observe($('html')[0], {
	childList: false,
	attributes: true,
});

observer.observe(document, {
  childList: true,
  subtree: true
});
