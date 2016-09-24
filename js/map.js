//*** Model Section ***
// Flicker Key: 58d33651bfa9988bc2f1589866f67591
// Flicker Secret: 7c47911e79bdaa8a
					
var map; //Creates map variable at global level
var infoWindow; // Creates infoWindow variable at global level
var markers = []; //Added blank marker array globally 
var myViewModel; // Creates myViewModel variable at global level

// PER SPECFICATION: Defines hardcoded array of location objects (at least 5). 
// Locations chosen from places near where I live and used latlng converter at:
// http://www.latlong.net/convert-address-to-lat-long.html

var locations = [ 	
	{ 'title': 'Disney World',
	  'address': 'Walt Disney World Resort, Orlando, FL 32830',
	  'latlng': {'lat': 28.392155, 'lng': -81.532215},
	  'info': 'Happiest Place on Earth',
	},

	{ 'title': 'Sea World Orlando',
	  'address': '7007 Sea World Dr, Orlando, FL 32821',
	  'latlng': {'lat': 28.411194, 'lng': -81.461739},
	  'info': 'Great BBQ Restaurant',
	},

	{ 'title': 'Universal Orlando',
	  'address': '6000 Universal Blvd, Orlando, FL 32819',
	  'latlng': {'lat': 28.473060, 'lng': -81.461958},
	  'info': 'Great Vietnamese Restaurant',
	},

	{ 'title': 'Discovery Cove',
	  'address': '6000 Discovery Cove Way, Orlando, FL 32821',
	  'latlng': {'lat': 28.405421, 'lng': -81.461584},
	  'info': 'Cool Restaurant for Breakfast',
	},

	{ 'title': 'Disney Animal Kingdom',
	  'address': '2901 Osceola Pkwy, Orlando, FL 32830',
	  'latlng': {'lat': 28.352395, 'lng': -81.603652},
	  'info': 'Great Place for Breakfast',
	},

	{ 'title': 'Wet n Wild Orlando',
	  'address': '6200 International Dr, Orlando, FL 32819',
	  'latlng': {'lat': 28.461355, 'lng': -81.465361},    
	  'info': 'Bank with recent HUGE scandal',
	},

	{ 'title': 'Holy Land Experience',
	  'address': '4655 Vineland Rd, Orlando, FL 32811',
	  'latlng': {'lat': 28.495742, 'lng': -81.432944},
	  'info': 'Very small bank - looks kind of strange',
	},

	{ 'title': 'Orlando Science Center',
	  'address': '777 E Princeton St, Orlando, FL 32803',
	  'latlng': {'lat': 28.572279, 'lng': -81.368362},
	  'info': 'Funky theather with Great Prices',
	},

	{ 'title': 'Harry P. Leu Gardens',
	  'address': '1920 N Forest Ave, Orlando, FL 32803',
	  'latlng': {'lat': 28.569718, 'lng': -81.356347},
	  'info': 'Theater Chain'
	},

	// { 'title': 'West Orange Dog Park',
	//   'address': '12400 Marshall Farms Rd, Winter Garden, FL 34787',
	//   'latlng': {'lat': 28.543861, 'lng': -81.564208},
	//   'info': 'Coolest Dog Park in Florida',
	// },

	// { 'title': 'Disney World',
	//   'latlng': {'lat': 28.543861, 'lng': -81.564208},
	//   'info': 'Coolest Dog Park in Florida',
	// },

	// { 'title': 'Universal Orlando',
	//   'address': '12400 Marshall Farms Rd, Winter Garden, FL 34787',
	//   'latlng': {'lat': 28.543844, 'lng': -81.564255},
	//   'info': 'Coolest Dog Park in Florida',
	// }

	// { 'title': 'George Bailey Park',
	//   'latlng': {'lat': 28.528546, 'lng': -81.556786},
	//   'info': 'Park with Baseball and Soccer Fields',
	// },

	// { 'title': 'Butler Bay Recreation Area',
	//   'latlng': {'lat': 28.505466, 'lng': -81.551895},
	//   'info': 'Great Water Front Park with Tennis',
	// }
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

// Dropdown toggle sample from http://stackoverflow.com/questions/25301661/toggle-a-bootstrap-dropdown-with-knockout-click-binding
    self.buttonClick = function(){
        $('.dropdown-toggle').dropdown('toggle');
    }
});


// PER SPECFICATION: Filter items using the filter text (returns matching subset of original array) and 
// connects to markers allowing them to be seen or hidden dynamically based on input in the text field.
// Filtering code example from: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html

	self.filteredList = ko.computed(function() {
		// make filter functionality case insensitive
		var filter = self.userInput().toLowerCase();
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
		google.maps.event.trigger( marker, 'click' );
	};
};


// Creates map 

function googleError(){
		// alert("The Map Cannot Be Loaded At This Time\nPlease Try Later");
		setTimeout(function(){alert("The Map Cannot Be Loaded At This Time\nPlease Try Later")}, 2500);
};


function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {  // Code to get map to appear
			center: {lat: 28.471194, lng: -81.465361}, // Sets location for center of map in DOM
			zoom: 11  // Sets initial zoom level when the map first appears. 
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
				getWikiData(marker, marker.title);
				//Defines content in infoWindow using code in line below
				// infoWindow.setContent('<div><strong>' + marker.title + '</strong><br>' + marker.info + '</div>'); 
				// infoWindow.open(map, marker); // infoWindow open method
				this.setAnimation(google.maps.Animation.BOUNCE); // PER SPECFICATION: Sets icon bounce animation
				setTimeout(function(){ marker.setAnimation(null); }, 1420); // Sets marker animation timeout - 1420 is 2 bounces
			});
		}



		infoWindow = new google.maps.InfoWindow(); // Creates new map infoWindows method
		myViewModel = new ViewModel(); // Creates new ViewModel method
		ko.applyBindings(myViewModel);  // Evokes functional use of knockout JS to KO commands
	}

	getWikiData = function(marker, name) {
		var wikiQuery;

		// If the wikiRequest times out, then display a message with a link to the Wikipedia page.
		var wikiRequestTimeout = setTimeout(function() {
			console.log("failed");
		}, 4000);

			wikiQuery = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + name + '&srproperties=snippet&format=json&callback=wikiCallback';

			$.ajax({url: wikiQuery,
				dataType:'jsonp',
				success: function(data) {
					console.log(data[2]);
					var description = data[2];

					var contentString = '<div><h5>' + name + '</h5><p>' + description + '</p></div>';
                    infoWindow.setContent(contentString);
                    infoWindow.open(map, marker);

				    clearTimeout(wikiRequestTimeout);
				}
			});
	};

	// getWikiData('', 'Disney World')



	// function getFlickrImage() {

	// 	var USER_KEY = '58d33651bfa9988bc2f1589866f67591',
	// 		USER_ID = '7c47911e79bdaa8a';


	// 	// Test url string:
	// 	var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+USER_KEY+'&user_id='+USER_ID+'&text=adnate+numskull&format=json&nojsoncallback=1';
	// 	$.getJSON(url, function(data) {
	// 		console.log(data)
	// 	    var detail = data.photos.photo[0];
	// 	    var $body = $('body');
	// 	    $body.append('<img class="infowndw-img" src="https://farm' + detail.farm + '.staticflickr.com/' + detail.server + '/' + detail.id + '_' + detail.secret + '_n.jpg">');
	// 	}).fail(function(){
	// 	        $body.append('<p style="text-align: center;">Sorry! The photo</p><p style="text-align: center;">could not be loaded</p>');
	// 	   });
	// };
	
	// getFlickrImage();


