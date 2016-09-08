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

// Constructor

var Location = function(location){
		this.title = location.title;

		// this.marker = 
};


var viewModel = function (){
	var self = this;

	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location) {
		self.myNeighborhood.push(new Location(location));
	});

};

ko.applyBindings(viewModel);



	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 28.526289, lng: -81.542796},
			zoom: 13
		});

	
	var infoWindow = new google.maps.InfoWindow();

		}



					

					