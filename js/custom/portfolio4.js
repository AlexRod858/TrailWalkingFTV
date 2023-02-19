class Portfolio4 extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                          alt="Close modal" /></div>
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-8">
                              <div class="modal-body">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase">En la cima del mundo</h2>
                                  <img class="img-fluid d-block mx-auto"
                                      src="https://www.nps.gov/glac/planyourvisit/images/hiking-with-ranger-2to1.jpg?maxwidth=1200&autorotate=false"
                                      alt="..." />
                                  <p>Carlos es un montañista experimentado que ha subido a muchas cumbres en su vida. Hoy
                                      ha decidido enfrentar un nuevo desafío: subir a la cima de una montaña que nunca
                                      antes había escalado. A medida que se acerca a la cima, Carlos siente la emoción de
                                      la aventura y la satisfacción del logro. Cuando llega a la cima, abre los brazos y
                                      grita de alegría, sintiendo que está en la cima del mundo.</p>
                                  <ul class="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Lines
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Branding
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
  customElements.define('port-folio4', Portfolio4);