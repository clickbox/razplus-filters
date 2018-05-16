import puppeteer from "puppeteer";

const leveledListNew = "http://dev.raz-plus.com/books/leveled-books/";
const ellLeveledReaderPacks = "http://dev.raz-plus.com/ell/ell-leveled-reader-packs/";
const tradeBooks = "http://dev.raz-plus.com/book-related-resources/trade-book-lessons/";
const ellVocabularyBooks = "http://dev.raz-plus.com/ell/ell-vocabulary-books/";
const ellContentPicturePacks = "http://dev.raz-plus.com/ell/ell-content-picture-packs/"; 
const ellVocabularyPowerPacks = "http://dev.raz-plus.com/ell/ell-vocabulary-power-packs/";
const ellComicConversations = "http://dev.raz-plus.com/ell/ell-comic-conversations/";
const ellLanguageSkillPacks = "http://dev.raz-plus.com/ell/ell-language-skill-packs/";
const serialBooks = "http://dev.raz-plus.com/books/serial-books/";
const genreCollections = "http://dev.raz-plus.com/books/genre-collections/";
const soundSymbolBooks = "http://dev.raz-plus.com/books/sound-symbol-books/";
const decodableBooks = "http://dev.raz-plus.com/books/decodable-books/";
const highFrequencyWordBooks = "http://dev.raz-plus.com/books/high-frequency-word-books/";
const sharedReading = "http://dev.raz-plus.com/books/shared-reading/";
const vocabBooks = "http://dev.raz-plus.com/books/vocabulary-books/";
const poetry = "http://dev.raz-plus.com/books/poetry-books/";
const comics = "http://dev.raz-plus.com/books/comic-books/";
const pairedBooks = "http://dev.raz-plus.com/book-related-resources/paired-books/";
const writersResponse = "http://dev.raz-plus.com/writing/writers-response/";
const wordSorts = "http://dev.raz-plus.com/vocabulary/word-sorts/";

const levelFilter0 = "label[for='levelFilter0']";
const levelFilter1 = "label[for='levelFilter1']";
const levelFilter2 = "label[for='levelFilter1']";
const remoteFilter16 = "label[for='remoteFilter16']";
const remoteFilter76 = "label[for='remoteFilter76']";
const remoteFilter1 = "label[for='remoteFilter1']";
const localFilter1 = "label[for='localFilter1']";
const classFilter1 = "label[for='classFilter1']";
const filterLoader = "#filterLoader";

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let page;
let browser;
const width = 1080;
const height = 3240;

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: false,
		sloMo: 80,
		args: [`--window-size${width},${height}`]
	});
	page = await browser.newPage();
	await page.setViewport({ width, height });
});

afterAll(() => {
	browser.close();
});

describe("leveled-list-new.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(leveledListNew);
		await page.click(levelFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(levelFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

describe("ell-leveled-reader-packs.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(ellLeveledReaderPacks);
		await page.click(".btn-close");
		await page.click(remoteFilter16);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(remoteFilter16);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("trade-book-lessons.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(tradeBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("ell-vocabulary-books.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(ellVocabularyBooks);
		await timeout(2000);
		await page.click(remoteFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(remoteFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("ell-content-picture-packs.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(ellContentPicturePacks);
		const sazVisible = await page.evaluate(() => document.getElementById("1").style.display);
		expect(sazVisible).not.toBeTruthy();
		await page.click(localFilter1);
		await timeout(2000);
		const sazHidden = await page.evaluate(() => document.getElementById("1").style.display);
		expect (sazHidden).toBe("none");
		await page.click(localFilter1);
		await timeout(2000);
		const sazVisible2 = await page.evaluate(() => document.getElementById("1").style.display);
		expect(sazVisible2).not.toBe("none");
	}, 16000);
});

describe("ell-comic-conversations.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(ellComicConversations);
		await page.click(classFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(remoteFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toBeLessThanOrEqual(allBooksCount2);
		await page.click(classFilter1);
		await page.click(remoteFilter1);
		await timeout(2000);
		const currentBookCount3 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount3 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount3).toEqual(allBooksCount3);
	}, 16000);
});


describe("ell-vocabulary-power-packs.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(ellVocabularyPowerPacks);
		await page.click(remoteFilter76);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(remoteFilter76);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

describe("ell-language-skill-packs.html", () => {
	test("Show Me Only Filter Checkbox Inputs Filter Accurately", async () => {
		await page.goto(ellLanguageSkillPacks);
		const sazVisible = await page.evaluate(() => document.querySelectorAll(".LevelsDiv")[1].style.display);
		expect(sazVisible).not.toBeTruthy();
		await page.click(localFilter1);
		await timeout(2000);
		const sazHidden = await page.evaluate(() => document.querySelectorAll(".LevelsDiv")[1].style.display);
		expect (sazHidden).toBe("none");
		await page.click(localFilter1);
		await timeout(2000);
		const sazVisible2 = await page.evaluate(() => document.querySelectorAll(".LevelsDiv")[1].style.display);
		expect(sazVisible2).not.toBe("none");
	}, 16000);
});

describe("serials.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(serialBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("content-area-reading-common.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(genreCollections);
		await page.click(levelFilter0);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(levelFilter0);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("sound-symbol-books.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(soundSymbolBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("decodable-books.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(decodableBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("high-frequency-word-books.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(highFrequencyWordBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("shared-reading-list.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(sharedReading);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("vocab-books.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(vocabBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});
	
describe("poetry.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(poetry);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

describe("comics.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(comics);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

describe("paired-books.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(pairedBooks);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

describe("word-sorts.html", () => {
	test("Show Me Only Filter Checkboxes work on & off", async () => {
		await page.goto(wordSorts);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount1 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount1 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount1).not.toEqual(allBooksCount1);
		await page.click(localFilter1);
		await timeout(2000);
		const currentBookCount2 = await page.$eval("#currentBookCount", el => el.innerText);
		const allBooksCount2 = await page.$eval("#allBooksCount", el => el.innerText);
		expect(currentBookCount2).toEqual(allBooksCount2);
	}, 16000);
});

