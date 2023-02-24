class Presentacion extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<section class="page-section" id="presentacion">
      <div class="container">
        <iframe id="myvideo" width="560" height="315" src="https://www.youtube.com/embed/dMrW53ps7uU?controls=0" allowfullscreen></iframe>
      </div>
    </section>
<br>`;
  }
}
customElements.define("present-acion", Presentacion);
