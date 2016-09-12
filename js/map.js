//*** Model Section
					
var map; //Creates map variable at global level


var markers = []; //Added blank marker array globally 


var locations = [
	{ 'title': 'Where I Live Now',
	  'latlng': {'lat': 28.526289, 'lng': -81.542796},
	  'Info': 'Casa Mirella Apartments',
	
	},

	{ 'title': 'Ellie Lou BBQ',
	  'latlng': {'lat': 28.531206, 'lng': -81.539861},
	  'Info': 'Great BBQ Restaurant',
	  
	},

	{ 'title': 'Pho-Real',
	  'latlng': {'lat': 28.529005, 'lng': -81.541229},
	  'Info': 'Great Vietnamese Restaurant',

	},

	{ 'title': 'Keke Breakfast Cafe',
	  'latlng': {'lat': 28.529887, 'lng': -81.540118},
	  'Info': 'Cool Restaurant for Breakfast',
	  
	},

	{ 'title': 'Wells Fargo Bank',
	  'latlng': {'lat': 28.532100, 'lng': -81.541391},
	  'Info': 'Bank with recent HUGE scandal',
	  
	},

	{ 'title': 'Trustco Bank',
	  'latlng': {'lat': 28.528313, 'lng': -81.542554},
	  'Info': 'Very small bank - looks kind of strange',
	
	  // 'Info': [{'what': 'Bank','type':'Branch Office'}]
	},

	{ 'title': 'West Orange 5 Theater',
	  'latlng': {'lat': 28.548660, 'lng': -81.542499},
	  'Info': 'Funky theather with Great Prices',
	
	},

	{ 'title': 'AMC West Theater',
	  'latlng': {'lat': 28.551897, 'lng': -81.515219},
	  'Info': 'Theater Chain'
	 
	},

	{ 'title': 'George Bailey Park',
	  'latlng': {'lat': 28.528546, 'lng': -81.556786},
	  'Info': 'Park with Baseball and Soccer Fields',

	},

	{ 'title': 'West Orange Dog Park',
	  'latlng': {'lat': 28.543861, 'lng': -81.564208},
	  'Info': 'Coolest Dog Park in Florida',

	},

	{ 'title': 'Butler Bay Recreation Area',
	  'latlng': {'lat': 28.505466, 'lng': -81.551895},
	  'Info': 'Great Water Front Park with Tennis',
	  
	}
];
	

// Constructor

var Location = function(location){
		this.title = location.title;
};


//*** Octopus


var viewModel = function (){
	var self = this;

	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location) {
		self.myNeighborhood.push(new Location(location));

		// I feel like I want to use array ID numbers 0-11 to connect to the related marker popups 
		//  with click listener (id: i). Also feel like I should use something like: this.goToMarker. 
		// I think the click event listener needs to be tied to menu items when created... 

			// navMarker.addListener('click', function() {
				// var navMarker = this;
					// infoWindow.setContent('<div text-left>' + marker.title + '</div>');
					// infoWindow.open(map, marker);
				// });

		// Or maybe the click event needs to be in the html page as a <script> where the menu items are generated, 
		// maybe that's a better way of trying to connect back to the markers popups and animations??

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

		var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

		for (var i = 0; i < locations.length; i++) {

		var position = locations[i].latlng; 
		var title = locations[i].title; 
		var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

		var marker = new google.maps.Marker({
				map: map,
				position: position,
				title: title,
				animation: google.maps.Animation.DROP,
				id: i,
				icon: image
				});

				markers.push(marker);

				marker.addListener('click', function() { 
					// populateInfoWindow(this, infoWindow);
					var marker = this;
					infoWindow.setContent('<div align="left">' + marker.title + '</div>');
					infoWindow.open(map, marker);
					this.setAnimation(google.maps.Animation.BOUNCE);
						setTimeout(function(){ marker.setAnimation(null); }, 1420);

					
		});
			}

		var infoWindow = new google.maps.InfoWindow();

		}
	
	
	
	

		 	


					

					