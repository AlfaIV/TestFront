export class nowWatch {
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
    console.log("nowWatch");
    console.log(window.location.pathname);
    console.log(window.location.href);
    console.log(typeof Handlebars);
    console.log(Handlebars);
    const template = Handlebars.template["nowWatch.hbs"];
    console.log(template);
    console.log(typeof template);
    console.log("321");
    // this.#parent.innerHTML = template();
    console.log("happy");
  }
}
