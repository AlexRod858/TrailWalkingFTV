class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer class="footer py-4">
      <div class="container">
          <div class="row align-items-center">
              <div> <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img
                          alt="Licencia de Creative Commons" style="border-width:0"
                          src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span
                      xmlns:dct="http://purl.org/dc/terms/" property="dct:title">FtvSenderismo</span> by <span
                      xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Andros & Pascal</span>
                  is licensed under a <a rel="license"
                      href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons
                      Reconocimiento-NoComercial-SinObraDerivada 4.0 Internacional License.</a></div>
              <div class="col-lg-4 my-3 my-lg-0">
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i
                          class="fab fa-twitter"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i
                          class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i
                          class="fab fa-linkedin-in"></i></a>
              </div>

              <div class="col-lg-4 text-lg-end">
                  <a class="link-dark text-decoration-none me-3" href="#!">Políticas de privacidad</a>
                  <a class="link-dark text-decoration-none" href="#!">Términos de uso</a>
              </div>
          </div>
      </div>
  </footer>`;
  }
}
customElements.define("foo-ter", Footer);
