class Contacts extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<section class="page-section" id="contact">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Contáctanos</h2>
              <h3 class="section-subheading text-muted">¡No te vayas con dudas!</h3>
          </div>
          <!-- * * * * * * * * * * * * * * *-->
          <!-- * * SB Forms Contact Form * *-->
          <!-- * * * * * * * * * * * * * * *-->
          <!-- This form is pre-integrated with SB Forms.-->
          <!-- To make this form functional, sign up at-->
          <!-- https://startbootstrap.com/solution/contact-forms-->
          <!-- to get an API token!-->
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div class="row align-items-stretch mb-5">
                  <div class="col-md-6">
                      <div class="form-group">
                          <!-- Name input-->
                          <input class="form-control" id="name" type="text" placeholder="Tu nombre *"
                              data-sb-validations="required" />
                          <div class="invalid-feedback" data-sb-feedback="name:required">Nombre es necesario.</div>
                      </div>
                      <div class="form-group">
                          <!-- Email address input-->
                          <input class="form-control" id="email" type="email" placeholder="Tu Email *"
                              data-sb-validations="required,email" />
                          <div class="invalid-feedback" data-sb-feedback="email:required">Email necesario.</div>
                          <div class="invalid-feedback" data-sb-feedback="email:email">Email no es válido.</div>
                      </div>
                      <div class="form-group mb-md-0">
                          <!-- Phone number input-->
                          <input class="form-control" id="phone" type="tel" placeholder="Tu Teléfono *"
                              data-sb-validations="required" />
                          <div class="invalid-feedback" data-sb-feedback="phone:required">Teléfono es necesario.</div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group form-group-textarea mb-md-0">
                          <!-- Message input-->
                          <textarea class="form-control" id="message" placeholder="Tu mensaje *"
                              data-sb-validations="required"></textarea>
                          <div class="invalid-feedback" data-sb-feedback="message:required">Mensaje es necesario.
                          </div>
                      </div>
                  </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center text-white mb-3">
                      <div class="fw-bolder">Enviado!</div>
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">No está activado</a>
                  </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">Error!</div>
              </div>
              <!-- Submit Button-->
              <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled"
                      id="submitButton" type="submit">Enviar</button></div>
          </form>
      </div>
  </section>`;
  }
}
customElements.define("cont-acts", Contacts);
