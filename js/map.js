//*** Model Section
					
var map;

// Added blank marker array globally 
var markers = [];

// Hard coded locations array for model section

	// KO Array

	// Removed 10 locations to simplify code - NOTE: removed comma from first {}

var locations = [
	{ 'title': 'Where I Live Now',
	  'lat': 28.526289,
	  'lng': -81.542796,
	  'info': [{'what': 'Home','type':'Apartment'}]
	}
];

//*** Octopus





var ViewModel = function (){
	    var self = this;
	    this.myLocations = ko.observableArray(locations);    
	};

	var vm = new ViewModel();
	ko.applyBindings(vm);

	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 28.526289, lng: -81.542796},
			zoom: 13
		});

	
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

		//*** View

		function Places (title, lat, lng)
		{
				this.title = title;
				this.lat = lat;
				this.lng = lng;
				this.info = info

		}


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


					

					