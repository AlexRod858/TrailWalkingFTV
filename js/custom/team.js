class Team extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<section class="page-section" id="team">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Nuestro equipo</h2>
          </div>
          <div class="row">
              <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                      <h4>Alberto Chicote</h4>
                      <p class="text-muted">Guía de senderismo</p>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i
                              class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i
                              class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i
                              class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                      <h4>Nena Daconte</h4>
                      <p class="text-muted">Coordinador de ventas y marketing</p>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i
                              class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"
                          aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"
                          aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                      <h4>Matías Prats</h4>
                      <p class="text-muted">Coordinador de equipo y recursos humanos</p>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i
                              class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i
                              class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i
                              class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                  <p class="large text-muted">Somos un equipo comprometido y apasionado por lo que hacemos. Nos
                      enorgullece brindar a nuestros clientes una experiencia única y memorable en cada excursión de
                      senderismo que ofrecemos. ¡Únete a nosotros en nuestra próxima aventura de senderismo y descubre
                      por qué somos un gran equipo!</p>
              </div>
          </div>
      </div>
  </section>`;
    }
  }
  customElements.define('te-am', Team);