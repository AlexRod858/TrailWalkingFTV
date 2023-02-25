class Portfolio5 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                          alt="Close modal" /></div>
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-8">
                              <div class="modal-body">
                                  <!-- Project details-->
                                  <h2 class="text-uppercase">La aventura está en el camino</h2>
                                  <img class="img-fluid rounded-3 d-block mx-auto"
                                      src="https://www.runtastic.com/blog/wp-content/uploads/2019/10/blog_thumbnail_offroad-running_1200x800-1024x683.jpg"
                                      alt="..." />
                                  <p>Laura es una joven que ama la naturaleza y la compañía de sus amigos. Hoy ha decidido
                                      hacer una caminata por un sendero en compañía de sus amigos más cercanos. Juntos,
                                      caminan por un paisaje hermoso, riendo y disfrutando del momento. Para Laura, la
                                      aventura no está en llegar a un destino específico, sino en el camino que recorre
                                      junto a sus amigos.</p>
                                  <ul class="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Southwest
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Website Design
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
customElements.define("port-folio5", Portfolio5);
