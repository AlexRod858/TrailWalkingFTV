class Rutas extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<section class="page-section" id="services">
    <div class="container">
      <div class="text-center routesGeoloc">
        <h2 class="section-heading text-uppercase">Rutas</h2>
        <p id="geoloc" class=""></p>
      </div>
      <div class="row text-center">
        <div class="col-md-4 container">
          <img
            src="https://static-maps.alltrails.com/production/at-map/100395370/v1-trail-england-hampshire-chawton-and-upper-farringdon-circular-at-map-100395370-1649932448-414w200h-en-US-i-2-style_3.png"
            class="img-fluid rounded-3"
            alt=""
          />
          <h4 class="my-3">CAMINO NUEVO</h4>
          <p class="text-gray">Longitud total: 4 km.</p>
          <p class="text-gray">Duración: 2 hora 30 minutos.</p>
          <p class="text-gray">Dificultad: media.</p>
        </div>
        <div class="col-md-4 divmap mb-5">
        <div class="rounded-10 col-md video-sm" id="map"></div>
        <h4 class="my-3">TU RUTA</h4>
          <button type="button" id="endRoute" class="mt-1 mb-2 btn btn-primary btn-sm text-uppercase">End</button>
        </div>
        <div class="col-md-4">
          <img
            src="https://static-maps.alltrails.com/production/at-map/145500529/v1-trail-mexico-guanajuato-palo-blanco-at-map-145500529-1667329886-414w200h-en-US-i-2-style_3.png"
            class="img-fluid rounded-3"
            alt=""
          />
          <h4 class="my-3">RUTA DE LOS MOLINOS</h4>
          <p class="text-gray">Longitud total: 3,5 km.</p>
          <p class="text-gray">Duración: 2 horas.</p>
          <p class="text-gray">Dificultad: baja.</p>
        </div>
      </div>
    </div>
  </section>`;
  }
}
customElements.define("rut-as", Rutas);
