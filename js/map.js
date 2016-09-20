//*** Model Section ***
					
var map; //Creates map variable at global level
var infoWindow; // Creates infoWindow variable at global level
var markers = []; //Added blank marker array globally 
var myViewModel; // Creates myViewModel variable at global level

// Defines hardcoded array of location objects
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
	

// Location Constructor

var Location = function(location, i){
		this.title = location.title;
		this.marker = markers[i];

};



//*** Viewmodel Section ***

// Location Menu Constructor

var ViewModel = function (){
	var self = this; 

	self.userInput = ko.observable('');

	self.myNeighborhood = ko.observableArray();
	locations.forEach(function(location, i) {
		self.myNeighborhood.push(new Location(location, i));

	});


// Filter items using the filter text (returns matching subset of original array)

	self.filteredList = ko.computed(function() {
		// make filter functionality case insensitive
		var filter = self.userInput().toLowerCase();
		console.log(filter);
		// Returns value of filtered items computed observiable
		if (!filter) {
			return self.myNeighborhood();
		} else {
			return ko.utils.arrayFilter(self.myNeighborhood(), function(place) {
				var title = place.title.toLowerCase();
	            return title.indexOf(filter) !== -1;
			});
		}
	});


// Connects location menu list to coorosponding markers evoking actions when triggered with click. 

	self.triggerMarker = function(location){
		var marker = location.marker;  
		console.log("clicked:", location);
		google.maps.event.trigger( marker, 'click' );
	};

};


// *** View Section ***

// Creates map 

function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 28.526289, lng: -81.542796},
			zoom: 13
		});

// Loops through array to create and place map icons

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
				animation: google.maps.Animation.DROP,
				id: i,  // Index to relate markers to locations
				icon: image // Sets icons used to var image (beachflag in this case)
				});

				markers.push(marker); // Populates marker icons on map

				// Sets infoWindow to appear when map icon or location list menu item clicked
				marker.addListener('click', function() { 
					var marker = this;
					infoWindow.setContent(  //Defines content in infoWindow using code in line below
						'<div><strong>' + marker.title + '</strong><br>' + marker.info + '</div>'); 
					infoWindow.open(map, marker); // infoWindow open method
					this.setAnimation(google.maps.Animation.BOUNCE); // Sets icon bounce animation
						setTimeout(function(){ marker.setAnimation(null); }, 1420); // Sets marker animation timeout - 1420 is 2 bounces

					
		});
			}

		infoWindow = new google.maps.InfoWindow(); // Creates new map infoWindows method

		myViewModel = new ViewModel(); // Creates new ViewModel method

		ko.applyBindings(myViewModel);  // Evokes functional use of knockout JS to KO commands

		}


	
	
	
	

		 	


					

					