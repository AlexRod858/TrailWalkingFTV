//variables
let map;
let userPosition;
let markerUser;
let markers = [];
let markerFinal;

navigator.geolocation.getCurrentPosition(position);

function position(position) {
  userPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  // da tus cordenadas
  console.log(userPositionLatitude, userPositionLongitude);
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

  directionsRenderer.setMap(map);

  // crea un marcador donde esta el usuario
  markerUser = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: userPosition,
    map: map,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });

  // Adds a marker to the map.
  function addMarker(location, map) {
    // Add the marker at the clicked location
    markerFinal = new google.maps.Marker({
      position: location,
      map: map,
    });
  }


}

window.initMap = initMap;
