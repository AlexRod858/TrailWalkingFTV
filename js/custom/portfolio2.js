class Portfolio2 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                          alt="Close modal" /></div>
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-8">
                              <div class="modal-body">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase">Siguiendo el camino menos transitado</h2>
                                  <img class="img-fluid d-block mx-auto"
                                      src="https://www.nationalparks.fi/documents/10550/60112665/Oulanka_retkeilijat-kanjonilla_1050_HeikkiSulander.jpg/e47dc712-2e63-c458-78ea-40df39c1c453?t=1636620705771"
                                      alt="..." />
                                  <p>Ana es una joven intrépida que siempre busca desafíos. Hoy ha decidido explorar un
                                      sendero poco conocido que la llevará por un terreno agreste y hermoso. A pesar de
                                      que no sabe exactamente lo que encontrará en su camino, Ana se siente emocionada por
                                      la idea de seguir el camino menos transitado.</p>
                                  <ul class="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Explore
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Graphic Design
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
customElements.define("port-folio2", Portfolio2);
