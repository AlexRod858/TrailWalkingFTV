class Clients extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="py-5">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid img-brand d-block mx-auto"
                          src="https://www.ayuntamiento.es/sites/default/files/styles/shield_ayuntamiento_scale/public/images_old/ayuntamientos/1290/el-puerto-del-rosario.png"
                          alt="..." aria-label="Microsoft Logo" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid img-brand d-block mx-auto"
                          src="https://www.pngkey.com/png/full/128-1280410_logo-ayto-puerto-del-rosario-ayuntamiento-puerto-del.png"
                          alt="..." aria-label="Google Logo" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid img-brand d-block mx-auto"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Escudo_de_Santa_Cruz_de_Tenerife.svg/1200px-Escudo_de_Santa_Cruz_de_Tenerife.svg.png"
                          alt="..." aria-label="Facebook Logo" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid img-brand d-block mx-auto"
                          src="https://www.maspalomas.com/images/Ayuntamiento.png" alt="..."
                          aria-label="IBM Logo" /></a>
              </div>
          </div>
      </div>
  </div>`;
  }
}
customElements.define("cli-ents", Clients);
