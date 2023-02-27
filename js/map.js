//variables
let buttonEnd = document.getElementById("endRoute");

let map;
let userPosition;
let marker;
let markerUser;
let markersWaypoints = [];
let markerFinal;

navigator.geolocation.getCurrentPosition(position);

function position(position) {
  userPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  // printa tus cordenadas
  console.log("User Gelocation", userPosition);
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
  marker = new google.maps.Marker;
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

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });

  // Adds a marker to the map.
  function addMarker(location, map) {
    // Add the marker at the clicked location
    let mark = new google.maps.Marker({
      position: location,
      draggable: true,
      stopover: true,
      title: "Way Point Route",
      label: "W.P",
      map: map,
    });
    markersWaypoints.push(mark);
    console.log("Array Waypoints in addMarker", markersWaypoints);
  }
}
function clear() {
  marker.setMap(null);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  let end = markersWaypoints.length - 1;
  markerFinal = markersWaypoints[end];
  posEnd = { lat: markerFinal.position.lat(), lng: markerFinal.position.lng() };
  console.log("Final Marker and his position", markerFinal, posEnd);
  //clear();
  directionsService
    .route({
      origin: userPosition,
      destination: posEnd,
      //waypoints: markersWaypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + e));
}

window.initMap = initMap;
