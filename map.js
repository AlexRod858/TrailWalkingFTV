let map;
let userPositionLatitude;
let userPositionLongitude;

console.log(navigator.geolocation.getCurrentPosition(position));

navigator.geolocation.getCurrentPosition(position);

function position(position) {
  userPositionLatitude = position.coords.latitude;
  userPositionLongitude = position.coords.longitude;
  console.log(userPositionLatitude, userPositionLongitude);
}

initMap();

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: userPositionLatitude ? userPositionLatitude : 28.4957989,
      lng: userPositionLongitude ? userPositionLongitude : -13.8627456,
      //lat: userPositionLatitude ? userPositionLatitude : -34.397,
      //lng: userPositionLongitude ? userPositionLongitude : 150.644,
    },
    zoom: 11,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  });
}

window.initMap = initMap;
