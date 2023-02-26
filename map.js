//variables
let buttonEnd = document.getElementById("endRoute");
let map;
let userPosition;
let geocoder;
let markerUser;
let marker;
let markertemp;
let markersWaypoints = [];
let markerFinal;

navigator.geolocation.getCurrentPosition(position);

function position(position) {
  userPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  // printa tus cordenadas
  console.log("user position", userPosition);
}

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  map = new google.maps.Map(document.getElementById("map"), {
    //Morro Jable 28.0603403 -14.3565801
    //Puerto Rosario 28.4957989 -13.8627456
    center: userPosition ? userPosition : { lat: 28.4957989, lng: -13.8627456 },
    zoom: 13,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
  });

  marker = new google.maps.Marker({ map });
  geocoder = new google.maps.Geocoder();

  directionsRenderer.setMap(map);
  buttonEnd.addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });

  // crea un marcador donde esta el usuario
  markerUser = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    title: "User",
    label: "U",
    position: userPosition,
    map: map,
  });
  console.log("Marker User", markerUser);

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    geocode({ location: event.latLng });
  });

  function geocode(request) {
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        map.setCenter(results[0].geometry.location);
        //marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        locationMark = results[0].geometry.viewport;

        loc = { lat: locationMark.Ua.hi, lng: locationMark.Ia.hi };
        console.log(
          "result in geocode of locationMark and loc",
          locationMark,
          loc
        );
        addMarker(loc, map);
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }

  // Adds a marker to the map.
  function addMarker(location, map) {
    console.log("in addMarker location atribute", location);
    // Add the marker at the clicked location
    markertemp = new google.maps.Marker({
      draggable: true,
      stopover: true,
      title: "Way Point Route",
      label: "W.P",
      position: location,
      map: map,
    });

    console.log("Marker temp", markertemp);
    markersWaypoints.push(markertemp);
    console.log("array markersWaypoints", markersWaypoints);
  }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  let end = markersWaypoints.length;

  markerFinal = {
    lat: markersWaypoints[end - 1].position.lat(),
    lng: markersWaypoints[end - 1].position.lng(),
  };
  console.log("markerfinal", markerFinal, end);

  directionsService
    .route({
      origin: userPosition,
      destination: markerFinal,
      waypoints: markersWaypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
      //const route = response.routes[0];
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

window.initMap = initMap;
