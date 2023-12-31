export class Footer {
  #parent;

  constructor(parent, config) {
    this.#parent = parent;

    // Инициализация состояния компонента
    this.state = {
      activeMenu: null,
      menuElements: {},
    };
  }

  renderTemplate() {
    // Чтобы это работало, нужно импортировать handlebars.runtime.js
    console.log("footer");
    console.log(window.location.pathname);
    const template = Handlebars.templates["footer.hbs"];
    console.log(template);
    this.#parent.innerHTML = template();
  }
}
