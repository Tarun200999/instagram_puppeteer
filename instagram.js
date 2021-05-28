const puppeteer = require("puppeteer");
const url = "https://www.instagram.com/";

const instagram = {
	browser: null,
	page: null,

	intialize: async () => {
		instagram.browser = await puppeteer.launch({ headless: false });
		instagram.page = await instagram.browser.newPage();
		//This will open the nex tab  in browser
		//next we will go to Instgarm URL
	},
	login: async (username, password) => {
		//In this Step we are moving to URL and waiting for loading of website

		await instagram.page.goto(url, { waitUntil: "networkidle2" });
		await instagram.page.waitFor(1000);
		//Now fill the username and password in the input fields

		await instagram.page.type('input[name="username"]', username, {
			delay: 50,
		}); //username added

		await instagram.page.type('input[name="password"]', password, {
			delay: 50,
		}); //password added

		//Now Click to log IN Button after filling username and password

		let loginButton = await instagram.page.$x(
			'//button//div[contains(text(),"Log In")]'
		);

		await loginButton[0].click();
	},
};

module.exports = instagram;
