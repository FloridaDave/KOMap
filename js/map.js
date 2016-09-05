
					
var map;

// Added blank marker array globally 
var markers = [];

function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 28.526289, lng: -81.542796},
		zoom: 13
	});

	var locations = [
		{title: 'Where I live now', location: {lat: 28.526289, lng: -81.542796}},
		{title: 'Ellie Lou BBQ', location: {lat: 28.531206, lng: -81.539861}},
		{title: 'Pho-Real', location: {lat: 28.529005, lng: -81.541229}},
		{title: 'Keke Breakfast Cafe', location: {lat: 28.529887, lng: -81.540118}},
		{title: 'Wells Fargo Bank', location: {lat: 28.532100, lng: -81.541391}},
		{title: 'Trustco Bank', location: {lat: 28.528313, lng: -81.542554}},
		{title: 'West Orange 5 Theater', location: {lat: 28.548660, lng: -81.542499}},
		{title: 'AMC West Theater', location: {lat: 28.551897, lng: -81.515219}},
		{title: 'George Bailey Park', location: {lat: 28.528546, lng: -81.556786}},
		{title: 'West Orange Dog Park', location: {lat: 28.543861, lng: -81.564208}},
		{title: 'Butler Bay Recreation Area', location: {lat: 28.505466, lng: -81.551895}},
	]
	
	var infoWindow = new google.maps.InfoWindow();

	// New LatLngBounds instance that captures southwest and northeast corners
	var bounds = new google.maps.LatLngBounds();

	// This group uses location array to create array of markers on initialize 
	for (var i = 0; i < locations.length; i++) {

		// Get position from location array
		var position = locations[i].location;
		var title = locations[i].title;

		// Create a marker per location, and put into markers array
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});

		// Push the marker to our array of markers
		markers.push(marker);

		//Extend boundaries of map for each marker
		bounds.extend(marker.position);

		// Create an onclick event to open an infowindow at each marker
		marker.addListener('click', function() { 
			// populateInfoWindow(this, infoWindow);
			var marker = this;
			infoWindow.setContent('<div>' + marker.title + '</div>');
			infoWindow.open(map, marker);
		});


		// This function populates the infowindow when the marker is clicked. Only one window 
		// is allowed to open at the marker clicked and populate based on that markers position
		// function populateInfoWindow(marker, infowindow){

		// 	// Checks to make sure infowindow already open on this marker
			// if (infoWindow.marker != marker) {

				// console.log(infoWindow.marker != marker);

				// infoWindow.marker = marker;
				// infoWindow.setContent('<div>' + marker.title + '</div>');
				// infoWindow.open(map, marker);
				// Make sure marker property cleared if infowindow is closed
				// infoWindow.addListener('closeclick', function(){
				// 	infoWindow.setMarker(null);
				// });

			// }

			// Tells map to fit itself to bounds
			map.fitBounds(bounds);

		}
	}


					

					