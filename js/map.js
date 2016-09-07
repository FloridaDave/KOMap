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
	  'Info': [{'what': 'Home','type':'Apartment'}]
	},

	{ 'title': 'Ellie Lou BBQ',
	  'lat': 28.531206,
	  'lng': -81.539861,
	  'Info': [{'what': 'Restaurant','type':'BBQ'}]
	},

	{ 'title': 'Pho-Real',
	  'lat': 28.529005,
	  'lng': -81.541229,
	  'Info': [{'what': 'Restaurant','type':'Vietnamese'}]
	},

	{ 'title': 'Keke Breakfast Cafe',
	  'lat': 28.529887,
	  'lng': -81.540118,
	  'Info': [{'what': 'Restaurant','type':'Breakfast'}]
	},

	{ 'title': 'Wells Fargo Bank',
	  'lat': 28.532100,
	  'lng': -81.541391,
	  'Info': [{'what': 'Bank','type':'Branch Office'}]
	},

	{ 'title': 'Trustco Bank',
	  'lat': 28.528313,
	  'lng': -81.542554,
	  'Info': [{'what': 'Bank','type':'Branch Office'}]
	},

	{ 'title': 'West Orange 5 Theater',
	  'lat': 28.548660,
	  'lng': -81.542499,
	  'Info': [{'what': 'Entertainment','type':'Movie Theater'}]
	},

	{ 'title': 'AMC West Theater',
	  'lat': 28.551897,
	  'lng': -81.515219,
	  'Info': [{'what': 'Entertainment','type':'Movie Theater'}]
	},

	{ 'title': 'George Bailey Park',
	  'lat': 28.528546,
	  'lng': -81.556786,
	  'Info': [{'what': 'Recreation','type':'Park'}]
	},

	{ 'title': 'West Orange Dog Park',
	  'lat': 28.543861,
	  'lng': -81.564208,
	  'Info': [{'what': 'Recreation','type':'Park'}]
	},

	{ 'title': 'Butler Bay Recreation Area',
	  'lat': 28.505466,
	  'lng': -81.551895,
	  'Info': [{'what': 'Recreation','type':'Park'}]
	}
];
	

//*** Octopus

// var Title = function(title){
// 		this.title = ko.observable(title);
// };

// Constructor

var Location = function(location){
		this.title = location.title;
		
		// this.marker = 
};

// var viewModel = {
// 	// title:  'My Home'
// 	// title: ko.observable('My Home')
// 	titles: ko.observableArray([new Title("My Home"), new Title("Wellsfargo Bank"), new Title("Trustco Bank")])
// };

var viewModel = function (){
	var self = this;
	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location) {
		self.myNeighborhood.push(new Location(location));
	});
};

ko.applyBindings(viewModel);


//*** Below commented out to simiplify

				// var ViewModel = function (){
				// 	    var self = this;
				// 	    this.myLocations = ko.observableArray(locations);    
				// 	};

				// 	var vm = new ViewModel();
				// 	ko.applyBindings(vm);

	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 28.526289, lng: -81.542796},
			zoom: 13
		});

	
	var infoWindow = new google.maps.InfoWindow();

	// New LatLngBounds instance that captures southwest and northeast corners
	//*** Commented out below code to simplify
				//var bounds = new google.maps.LatLngBounds();

	// This group uses location array to create array of markers on initialize 
	
	//*** Commented out below code to simplify
				// for (var i = 0; i < locations.length; i++) {

				// 	// Get position from location array
				// 	var position = locations[i].location;
				// 	var title = locations[i].title;

				// 	// Create a marker per location, and put into markers array
				// 	var marker = new google.maps.Marker({
				// 		map: map,
				// 		position: position,
				// 		title: title,
				// 		animation: google.maps.Animation.DROP,
				// 		id: i
				// 	});

		// Push the marker to our array of markers

		//*** Commented out below code to simplify
				// markers.push(marker);

		//Extend boundaries of map for each marker
		//*** Commented out below code to simplify
				// bounds.extend(marker.position);

		// Create an onclick event to open an infowindow at each marker

		//*** Commented out below code to simplify
					// marker.addListener('click', function() { 
					// 	// populateInfoWindow(this, infoWindow);
					// 	var marker = this;
					// 	infoWindow.setContent('<div>' + marker.title + '</div>');
					// 	infoWindow.open(map, marker);
					// });

		//*** View


// Commented out my below code
		// function Places (title, lat, lng)
		// {
		// 		this.title = title;
		// 		this.lat = lat;
		// 		this.lng = lng;
		// 		this.info = info

		// }


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

			//*** Commented out below code to simplify
					// map.fitBounds(bounds);

		}
	//}


					

					