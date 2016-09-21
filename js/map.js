//*** Model Section ***
					
var map; //Creates map variable at global level
var infoWindow; // Creates infoWindow variable at global level
var markers = []; //Added blank marker array globally 
var myViewModel; // Creates myViewModel variable at global level

// PER SPECFICATION: Defines hardcoded array of location objects (at least 5). 
// Locations chosen from places near where I live and used latlng converter at:
// http://www.latlong.net/convert-address-to-lat-long.html

var locations = [ 	
	{ 'title': 'Where I Live Now',
	  'latlng': {'lat': 28.526289, 'lng': -81.542796},
	  'info': 'Casa Mirella Apartments',
	
	},

	{ 'title': 'Ellie Lou BBQ',
	  'latlng': {'lat': 28.531206, 'lng': -81.539861},
	  'info': 'Great BBQ Restaurant',
	  
	},

	{ 'title': 'Pho-Real',
	  'latlng': {'lat': 28.529005, 'lng': -81.541229},
	  'info': 'Great Vietnamese Restaurant',

	},

	{ 'title': 'Keke Breakfast Cafe',
	  'latlng': {'lat': 28.529887, 'lng': -81.540118},
	  'info': 'Cool Restaurant for Breakfast',
	  
	},

	{ 'title': 'Wells Fargo Bank',
	  'latlng': {'lat': 28.532100, 'lng': -81.541391},
	  'info': 'Bank with recent HUGE scandal',
	  
	},

	{ 'title': 'Trustco Bank',
	  'latlng': {'lat': 28.528313, 'lng': -81.542554},
	  'info': 'Very small bank - looks kind of strange',
	
	},

	{ 'title': 'West Orange 5 Theater',
	  'latlng': {'lat': 28.548660, 'lng': -81.542499},
	  'info': 'Funky theather with Great Prices',
	
	},

	{ 'title': 'AMC West Theater',
	  'latlng': {'lat': 28.551897, 'lng': -81.515219},
	  'info': 'Theater Chain'
	 
	},

	{ 'title': 'George Bailey Park',
	  'latlng': {'lat': 28.528546, 'lng': -81.556786},
	  'info': 'Park with Baseball and Soccer Fields',

	},

	{ 'title': 'West Orange Dog Park',
	  'latlng': {'lat': 28.543861, 'lng': -81.564208},
	  'info': 'Coolest Dog Park in Florida',

	},

	{ 'title': 'Butler Bay Recreation Area',
	  'latlng': {'lat': 28.505466, 'lng': -81.551895},
	  'info': 'Great Water Front Park with Tennis',
	  
	}
];
	

// Location Constructor  *** Info from Udacity training:
// https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175461/lessons/3406489055/concepts/34284402380923

var Location = function(location, i){
	this.title = location.title;
	this.marker = markers[i];
};



//*** ViewModel & Views Section ***
// PER SPECFICATION: Location Menu Constructor

var ViewModel = function (){
	var self = this; 

	self.userInput = ko.observable('');

	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location, i) {
		self.myNeighborhood.push(new Location(location, i));
});


// PER SPECFICATION: Filter items using the filter text (returns matching subset of original array) and 
// connects to markers allowing them to be seen or hidden dynamically based on input in the text field.
// Filtering code example from: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html

	self.filteredList = ko.computed(function() {
		// make filter functionality case insensitive
		var filter = self.userInput().toLowerCase();
		console.log(filter);
		// Returns value of filtered items computed observiable
		if (!filter) {
			// PER SPECFICATION: Shows all markers when no user input
			self.myNeighborhood().forEach(function(place) {  
				place.marker.setVisible(true);
			});
			// PER SPECFICATION: Returns all locations based on userInput filter
			return self.myNeighborhood();
		} else {  // Returns matching subset of locations
			return ko.utils.arrayFilter(self.myNeighborhood(), function(place) {
				var title = place.title.toLowerCase();
				var marker = place.marker; 
				var match = title.indexOf(filter) !== -1; // Determines match (true/false)
				if (!match) {
					marker.setVisible(false); // Sets markers not in subset to be hidden
				} else {
					marker.setVisible(true); // Sets markers in subset to be seen
				}
	            return match;
			});
		}
	});


// Synchronizes location menu list to coorosponding markers evoking actions when triggered with click. 
// Examples of click binding from: http://knockoutjs.com/documentation/click-binding.html

	self.triggerMarker = function(location){
		var marker = location.marker;  
		console.log("clicked:", location);
		google.maps.event.trigger( marker, 'click' );
	};

};


// Creates map 

function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {  // Code to get map to appear
			center: {lat: 28.526289, lng: -81.542796}, // Sets location for center of map in DOM
			zoom: 13  // Sets initial zoom level when the map first appears. 
		});

// PER SPECFICATION: Loops through array to create and place map icons

		for (var i = 0; i < locations.length; i++) {

			var position = locations[i].latlng; 
			var title = locations[i].title; 
			var info = locations[i].info;  // Used to get info to appear in infoWindow 
			// var image creates variable to connect use of beachflag graphic as map icon (see icon: image below)
			var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

			var marker = new google.maps.Marker({
					map: map,
					position: position,
					title: title,
					info: info,  //Used to get info to appear in infoWindow
					animation: google.maps.Animation.DROP, // Used to make markers drop from the top of the screen
					id: i,  // Index to relate markers to locations
					icon: image // Sets icons used to var image (beachflag in this case)
			});

			markers.push(marker); // Populates marker icons on map

			// PER SPECFICATION: Sets infoWindow to appear when map icon or location list menu item clicked
			marker.addListener('click', function() { 
				var marker = this;
				//Defines content in infoWindow using code in line below
				infoWindow.setContent('<div><strong>' + marker.title + '</strong><br>' + marker.info + '</div>'); 
				infoWindow.open(map, marker); // infoWindow open method
				this.setAnimation(google.maps.Animation.BOUNCE); // PER SPECFICATION: Sets icon bounce animation
				setTimeout(function(){ marker.setAnimation(null); }, 1420); // Sets marker animation timeout - 1420 is 2 bounces
			});
		}

		infoWindow = new google.maps.InfoWindow(); // Creates new map infoWindows method
		myViewModel = new ViewModel(); // Creates new ViewModel method
		ko.applyBindings(myViewModel);  // Evokes functional use of knockout JS to KO commands
	}


