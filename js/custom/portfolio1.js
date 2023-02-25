class Portfolio1 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                      alt="Close modal" /></div>
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <div class="modal-body">
                              <!-- Project details-->
                              <h2 class="text-uppercase">Explorando nuevos horizontes</h2>
                              <img class="img-fluid rounded-3 d-block mx-auto"
                                  src="https://www.experiencefayetteville.com/images/joomlart/article/f7abac252ae5ed68121b92ba7a669d87.jpg"
                                  alt="..." />
                              <p>Juan es un joven aventurero que ha decidido tomarse un tiempo libre para explorar la
                                  naturaleza. Hoy ha decidido subir a lo alto de una colina, desde donde podrá
                                  disfrutar de unas vistas espectaculares. Con su mochila a la espalda y su cámara en
                                  mano, Juan comienza su ascenso, animado por la idea de descubrir nuevos horizontes.
                              </p>
                              <ul class="list-inline">
                                  <li>
                                      <strong>Client:</strong>
                                      Threads
                                  </li>
                                  <li>
                                      <strong>Category:</strong>
                                      Illustration
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
customElements.define("port-folio1", Portfolio1);
