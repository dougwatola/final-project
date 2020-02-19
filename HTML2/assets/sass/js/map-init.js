// var styleArray = [{
//   "featureType": "administrative",
//   "elementType": "labels.text.fill",
//   "stylers": [{
//     "color": "#444444"
//   }]
// },
// {
//   "featureType": "landscape",
//   "elementType": "all",
//   "stylers": [{
//     "color": "#f2f2f2"
//   }]
// },
// {
//   "featureType": "poi",
//   "elementType": "all",
//   "stylers": [{
//     "visibility": "off"
//   }]
// },
// {
//   "featureType": "road",
//   "elementType": "all",
//   "stylers": [{
//       "saturation": -100
//     },
//     {
//       "lightness": 45
//     }
//   ]
// },
// {
//   "featureType": "road.highway",
//   "elementType": "all",
//   "stylers": [{
//     "visibility": "simplified"
//   }]
// },
// {
//   "featureType": "road.arterial",
//   "elementType": "labels.icon",
//   "stylers": [{
//     "visibility": "off"
//   }]
// },
// {
//   "featureType": "transit",
//   "elementType": "all",
//   "stylers": [{
//     "visibility": "off"
//   }]
// },
// {
//   "featureType": "water",
//   "elementType": "all",
//   "stylers": [{
//       "color": "#46bcec"
//     },
//     {
//       "visibility": "on"
//     }
//   ]
// },
// {
//   "featureType": "water",
//   "elementType": "geometry",
//   "stylers": [{
//     "color": "#5350ff"
//   }]
// }
// ]

// var mapOptions = {
//   center: new google.maps.LatLng(23.874936, 90.385821),
//   zoom: 14,
//   styles: styleArray,
//   scrollwheel: false,
//   backgroundColor: '#e5ecff',
//   mapTypeControl: false,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// };
// var map = new google.maps.Map(document.getElementsByClassName("maps")[0],
// mapOptions);
// var myLatlng = new google.maps.LatLng(23.874936, 90.385821);
// var focusplace = {lat: 55.864237, lng: -4.251806};
// var marker = new google.maps.Marker({
// position: myLatlng,
// map: map,
// icon: {
//   url: "assets/images/map-marker.png"
// }
// })


function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.674, lng: -73.945},
    zoom: 12,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
}