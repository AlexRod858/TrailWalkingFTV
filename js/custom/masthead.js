class MastHead extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<header class="masthead"> <div class="container">
      <div class="masthead-subheading">Bienvenido a FtvSenderismo!</div>
      <div class="masthead-heading text-uppercase">Tu lugar de aventuras</div>
      <a class="btn btn-primary btn-xl text-uppercase" href="#services">Saber más</a>
  </div> </header>`;
    }
  }
  customElements.define('mast-head', MastHead);