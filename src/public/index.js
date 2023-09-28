import { Watch } from "./components/watch/watch.mjs";
import { Footer } from "./components/footer/footer.mjs";

const rootElement = document.querySelector("#root");
const contentBlck = document.querySelector("#contentBlock");

const pageElement = document.createElement("footer");
const watchElement = document.createElement("Watch");

rootElement.appendChild(pageElement);
contentBlck.appendChild(watchElement);

const menu = new Footer(pageElement);
const watchList = new Watch(watchElement);

menu.renderTemplate();
watchList.renderTemplate();
