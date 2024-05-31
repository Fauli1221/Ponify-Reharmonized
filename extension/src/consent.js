"use strict";

let weGrabPerm;
if (self.browser) {
	// WebExtension API
	weGrabPerm = (perms) => {
		return browser.permissions.request(perms);
	};
} else {
	// Chromium extension API
	weGrabPerm = (perms) => {
		return new Promise((p, r) => {
			chrome.permissions.request(perms, p);
		});
	};
};

document.querySelector("#theDeerIsAlwaysHorny").addEventListener("mouseup", async function () {
	if (await weGrabPerm({origins: ["<all_urls>"]})) {
		self.close();
	};
});