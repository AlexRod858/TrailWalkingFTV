class Portfolio6 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                          alt="Close modal" /></div>
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-8">
                              <div class="modal-body">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase">Descubriendo el lado salvaje</h2>
                                  <img class="img-fluid rounded-3 d-block mx-auto"
                                      src="https://cms.visitballarat.com.au/app/uploads/2023/01/63c4d849f7bbf08c17380910.jpeg"
                                      alt="..." />
                                  <p>Roberto es un fotógrafo que siempre busca capturar imágenes espectaculares. Hoy ha
                                      decidido explorar un terreno agreste y escarpado en busca de la fotografía perfecta.
                                      Con su cámara en mano, Roberto camina por un terreno difícil y peligroso, rodeado de
                                      una naturaleza salvaje y hermosa. Para él, el desafío está en descubrir el lado
                                      salvaje de la naturaleza y capturarlo en una imagen.</p>
                                  <ul class="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Window
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Photography
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
customElements.define("port-folio6", Portfolio6);
