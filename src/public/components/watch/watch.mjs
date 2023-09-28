export class Watch {
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
    const template = Handlebars.templates["watch.hbs"];
    console.log(template);
    this.#parent.innerHTML = template();
  }
}
