class Portfolio extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<section class="page-section" id="portfolio">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">Algunas de nuestras experiencias.</h3>
          </div>
          <div class="row">
              <div class="col-lg-4 col-sm-6 mb-4">
                  <!-- Portfolio item 1-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid"
                              src="https://www.experiencefayetteville.com/images/joomlart/article/f7abac252ae5ed68121b92ba7a669d87.jpg"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">Explorando nuevos horizontes</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                  <!-- Portfolio item 2-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid"
                              src="https://www.nationalparks.fi/documents/10550/60112665/Oulanka_retkeilijat-kanjonilla_1050_HeikkiSulander.jpg/e47dc712-2e63-c458-78ea-40df39c1c453?t=1636620705771"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">Siguiendo el camino menos transitado</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                  <!-- Portfolio item 3-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid" src="https://www.barrabes.com/images/actualidad/large/21035.jpg"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">La naturaleza como refugio</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                  <!-- Portfolio item 4-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid"
                              src="https://www.nps.gov/glac/planyourvisit/images/hiking-with-ranger-2to1.jpg?maxwidth=1200&autorotate=false"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">En la cima del mundo</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                  <!-- Portfolio item 5-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid"
                              src="https://www.runtastic.com/blog/wp-content/uploads/2019/10/blog_thumbnail_offroad-running_1200x800-1024x683.jpg"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">La aventura está en el camino</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                  <!-- Portfolio item 6-->
                  <div class="portfolio-item">
                      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img class="img-fluid"
                              src="https://cms.visitballarat.com.au/app/uploads/2023/01/63c4d849f7bbf08c17380910.jpeg"
                              alt="..." />
                      </a>
                      <div class="portfolio-caption">
                          <div class="portfolio-caption-heading">Descubriendo el lado salvaje</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`;
  }
}
customElements.define("port-folio", Portfolio);
