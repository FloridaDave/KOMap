//*** Model Section
					
var map; //Creates map variable at global level


var markers = []; //Added blank marker array globally 


var locations = [
	{ 'title': 'Where I Live Now',
	  'latlng': {'lat': 28.526289, 'lng': -81.542796},
	  // 'lat': 28.526289,
	  // 'lng': -81.542796,
	  // 'Info': [{'what': 'Home','type':'Apartment'}]
	},

	{ 'title': 'Ellie Lou BBQ',
	  'latlng': {'lat': 28.531206, 'lng': -81.539861},
	  // 'lat': 28.531206,
	  // 'lng': -81.539861,
	  // 'Info': [{'what': 'Restaurant','type':'BBQ'}]
	},

	{ 'title': 'Pho-Real',
	  'latlng': {'lat': 28.529005, 'lng': -81.541229},
	  // 'lat': 28.529005,
	  // 'lng': -81.541229,
	  // 'Info': [{'what': 'Restaurant','type':'Vietnamese'}]
	},

	{ 'title': 'Keke Breakfast Cafe',
	  'latlng': {'lat': 28.529887, 'lng': -81.540118},
	  // 'lat': 28.529887,
	  // 'lng': -81.540118,
	  // 'Info': [{'what': 'Restaurant','type':'Breakfast'}]
	},

	{ 'title': 'Wells Fargo Bank',
	  'latlng': {'lat': 28.532100, 'lng': -81.541391},
	  // 'lat': 28.532100,
	  // 'lng': -81.541391,
	  // 'Info': [{'what': 'Bank','type':'Branch Office'}]
	},

	{ 'title': 'Trustco Bank',
	  'latlng': {'lat': 28.528313, 'lng': -81.542554},
	  // 'lat': 28.528313,
	  // 'lng': -81.542554,
	  // 'Info': [{'what': 'Bank','type':'Branch Office'}]
	},

	{ 'title': 'West Orange 5 Theater',
	  'latlng': {'lat': 28.548660, 'lng': -81.542499},
	  // 'lat': 28.548660,
	  // 'lng': -81.542499,
	  // 'Info': [{'what': 'Entertainment','type':'Movie Theater'}]
	},

	{ 'title': 'AMC West Theater',
	  'latlng': {'lat': 28.551897, 'lng': -81.515219},
	  // 'lat': 28.551897,
	  // 'lng': -81.515219,
	  // 'Info': [{'what': 'Entertainment','type':'Movie Theater'}]
	},

	{ 'title': 'George Bailey Park',
	  'latlng': {'lat': 28.551897, 'lng': -81.556786},
	  // 'lat': 28.551897,
	  // 'lng': -81.556786,
	  // 'Info': [{'what': 'Recreation','type':'Park'}]
	},

	{ 'title': 'West Orange Dog Park',
	  'latlng': {'lat': 28.543861, 'lng': -81.564208},
	  // 'lat': 28.543861,
	  // 'lng': -81.564208,
	  // 'Info': [{'what': 'Recreation','type':'Park'}]
	},

	{ 'title': 'Butler Bay Recreation Area',
	  'latlng': {'lat': 28.505466, 'lng': -81.551895},
	  // 'lat': 28.505466,
	  // 'lng': -81.551895,
	  // 'Info': [{'what': 'Recreation','type':'Park'}]
	}
];
	

// Constructor

var Location = function(location){
		this.title = location.title;
		// this.lat = location.lat; // Added for markers with KO
		// this.lng = location.lng; // Added for markers with KO

		// this.marker = // I know I'll need this with KO but haven't figured out the whole thing. Also tried below:

};


//*** Octopus

var viewModel = function (){
	var self = this;

	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location) {
		self.myNeighborhood.push(new Location(location));
	});

	self.myMarkers = ko.observableArray();
	markers.forEach(function(markers) {
		self.myMarkers.push(new Markers(markers));
	});

	var Markers = function(markers){
			this.latlng = location.latlng;
		};
};



ko.applyBindings(viewModel);


//*** View

function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 28.526289, lng: -81.542796},
			zoom: 13
		});

		var position = locations.location; 
		var title = locations.title; 

		var marker = new google.maps.Marker({
						map: map,
						position: position,
						title: title,
						animation: google.maps.Animation.DROP,
					});
		var infoWindow = new google.maps.InfoWindow();

		}
	
	
	
	

		 	


					

					