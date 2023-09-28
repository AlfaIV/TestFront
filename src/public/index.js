import { nowWatch } from "./components/nowWatch/nowWatch.mjs";
// console.log("hellow world");
import { Footer } from "./components/footer/footer.mjs";
// console.log("hellow world1");
import { Test } from "./components/testBlock/test.mjs";

const rootElement = document.querySelector("#root");
const contentBlck = document.querySelector("#contentBlock");

const pageElement = document.createElement("footer");
const pageElementnowWatch = document.createElement("nowWatch");
const testElement = document.createElement("Test");

rootElement.appendChild(pageElement);
contentBlck.appendChild(pageElementnowWatch);
contentBlck.appendChild(testElement);

const menu = new Footer(pageElement);
const watchList = new nowWatch(pageElementnowWatch);
const test = new Test(testElement);

menu.renderTemplate();
watchList.renderTemplate();
test.renderTemplate();
