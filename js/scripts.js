/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  /////////////////////////////////////////////
  ///////////////////  A U T O  P L A Y  //////////////////////////
  // Selecciona el video
  const video = document.getElementById("myvideo");

  // Opciones para el observer
  const options = {
    rootMargin: "0px",
    threshold: 0.5, // La sección del video es visible cuando el 50% o más está dentro de la ventana
  };

  // Crea el observer
  const observer = new IntersectionObserver(function (entries) {
    // Cuando la sección del video es visible
    if (entries[0].intersectionRatio >= 0.5) {
      // Reproduce el video
      video.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  }, options);

  // Observa la sección del video
  observer.observe(document.getElementById("services"));

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("geoloc").innerHTML =
      "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    document.getElementById("geoloc").innerHTML =
      "Cerca de :" +
      "<br>" +
      "Latitud: " +
      position.coords.latitude +
      "<br>" +
      "Longitud: " +
      position.coords.longitude;
  }
});
