export class Test {
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
    console.log("test");
    const template = Handlebars.templates["test.hbs"];
    console.log(template);
    this.#parent.innerHTML = template();
  }
}
