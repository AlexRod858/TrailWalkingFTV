class Portfolio3 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                          alt="Close modal" /></div>
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-8">
                              <div class="modal-body">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase">La naturaleza como refugio</h2>
                                  <img class="img-fluid rounded-3 d-block mx-auto"
                                      src="https://www.barrabes.com/images/actualidad/large/21035.jpg" alt="..." />
                                  <p>María es una mujer muy ocupada que siempre está en movimiento. Hoy ha decidido
                                      tomarse un respiro y buscar un refugio en la naturaleza. Con su perro a su lado,
                                      María camina por un sendero rodeada de árboles, respirando el aire fresco y
                                      disfrutando del silencio. Para ella, la naturaleza es un refugio donde puede
                                      encontrar la paz y la tranquilidad que necesita.</p>
                                  <ul class="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Finish
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Identity
                                      </li>
                                  </ul>
                                  <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                      type="button">
                                      <i class="fas fa-xmark me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
  }
}
customElements.define("port-folio3", Portfolio3);
