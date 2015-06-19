
var map;

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();



function success(position) {

  directionsDisplay = new google.maps.DirectionsRenderer();
  
  //pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  pos = new google.maps.LatLng(42.375065, -71.037198);

  
  map = new google.maps.Map(document.getElementById('map-canvas'), {
  	zoom: 15,
  	center: pos,
    styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
  });
  
  directionsDisplay.setMap(map);
  
  var request = {
  origin: pos,
//   destination: "Lexington, MA",
  destination: "Malden, MA",
  travelMode: google.maps.TravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.IMPERIAL,
   waypoints: [
  {location: new google.maps.LatLng(42.374597, -71.033327), stopover: false},
  {location: new google.maps.LatLng(42.374597, -71.033327), stopover: false},
  {location: new google.maps.LatLng(42.374597, -71.033327), stopover: false},
  {location: new google.maps.LatLng(42.374597, -71.033327), stopover: false},
  {location: new google.maps.LatLng(42.374597, -71.033327), stopover: false},
  {location: new google.maps.LatLng(42.380583, -71.026369), stopover: false},
  {location: new google.maps.LatLng(42.380583, -71.026369), stopover: false},
  {location: new google.maps.LatLng(42.387347, -71.023338), stopover: false}
   ],
   optimizeWaypoints: true,
   provideRouteAlternatives: true,
   avoidHighways: false,
   avoidTolls: false
  }
  

  
  
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
  
  
//   var FEMALayer = new google.maps.KmlLayer({
//     url: '../kml/boston.kml'
//   });
//   
//   FEMALayer.setMap(map);
//   
  
  
  
  
  
}

function error(msg) {
  console.log('error: ' + msg);
}

function initialize(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
  		console.log('geolocation not supported');
	}
}

google.maps.event.addDomListener(window, 'load', initialize);


