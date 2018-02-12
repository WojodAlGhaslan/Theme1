var locations = [
    [
      24.839630,             // Latitude
      46.721398,             // Longititude
	  //'real-estate-img-2.jpg',		//pointer
      'PNU',     // Title
      'HSRC',            // Location
	  'gl-real-estate-icon'         // Class
 
    ]
];


var map = new google.maps.Map(document.getElementById('gl-contact-map'), {
    zoom: 14,
    scrollwheel: false,
    styles: [{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"hue":"#ffa900"}]}],
    center: new google.maps.LatLng(24.839630, 46.721398)
});


var marker, i;
var markers = new Array();
var infowindow = new google.maps.InfoWindow();

for (i = 0; i < locations.length; i++) {

  var lat = locations[i][0],
      lng = locations[i][1],
      //imgLink = locations[i][2],
      jobTitle = locations[i][2],
      jobLoc = locations[i][3],
      markerIcon = 
      '<div class="gl-marker-icon '+locations[i][4]+'">'+
        '<div class="gl-map-marker-img">'+
          '<img src="images/'+locations[i][4]+'.svg"/>'+
        '</div>'+
      '</div>';

  marker = new RichMarker({
    position: new google.maps.LatLng(lat, lng),
    map: map,
    icon: locations[i][5],
    flat: true,
    anchor: RichMarkerPosition.MIDDLE,
    content: markerIcon
  });
  markers.push(marker);

  infoBubble = new InfoBubble({
    maxWidth: 350,
    shadowStyle: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    arrowSize: 8,
    borderWidth: 0,
    // disableAutoPan: true,
    autopanMargin: 5,
    hideCloseButton: true,
    arrowPosition: 15,
    backgroundClassName: 'phoney',
    arrowStyle: 0
  });

   marker.html =
    '<div class="gl-map-marker-wrapper gl-business-listing-map">'+
    '<div class="gl-map-marker-img">'+
      '<img src="images/'+imgLink+'"/>'+
    '</div>'+
    '<div class="gl-map-marker-info-details">'+
      '<h3 class="gl-heading">'+jobTitle+'</h3>'+
      '<p class="gl-location">'+ jobLoc +'</p>'+
  '</div>';


  infoBubble.close(map, marker);

  google.maps.event.addListener(marker, 'click', function() {
    if (!infoBubble.isOpen()) {
      infoBubble.setContent(this.html);
      infoBubble.open(map, this);
    } else {
      infoBubble.close(map, marker);
      infoBubble.setContent(this.html);
      infoBubble.open(map, this);
    }
    google.maps.event.addListener(map, 'click', function() {
        infoBubble.close(map, marker);
    }); 
  });
}

function AutoCenter() {
  var bounds = new google.maps.LatLngBounds();
  $.each(markers, function (index, marker) {
  bounds.extend(marker.position);
  });
  map.fitBounds(bounds);
}
AutoCenter();
