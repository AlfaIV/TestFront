console.log("hellow world");
import { Footer } from "./components/footer/footer.mjs";

const rootElement = document.querySelector("#root");
const pageElement = document.createElement("footer");
rootElement.appendChild(pageElement);

const menu = new Footer(pageElement);
menu.renderTemplate();
