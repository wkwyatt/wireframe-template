
var favorites = 0;

var wireframeApp = angular.module('wireframeApp', ['ngCookies','ngRoute']);

// wireframeApp.config(['$rootScope', '$location', '$myFactory',function() {
  
// }]);
wireframeApp.run(function run($rootScope, $http) {
    $http.get('https://callenderbeauty-api.herokuapp.com/confirm-login')
        .success(function (err, user) {
            console.log("========run session======");
            console.log(user);
            console.log("========run session======");
            if (user && user.userId) {
                $rootScope.user = user;
            }
        });
});

wireframeApp.config(function($routeProvider) {
    $routeProvider
    // Route for home page
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'hairStyleController'
    })
    // Route for wigs
    .when('/hair',{
        templateUrl: 'pages/unitcatalog.html',
        controller: 'hairStyleController'
    })
    // Route for oils
    .when('/oils',{
        templateUrl: 'pages/oils.html',
        controller: 'hairStyleController'
    })
});

wireframeApp.controller('hairStyleController',[ '$scope', '$http', '$cookies', '$cookieStore', function($scope, $http, $cookies, $cookieStore) {
  $scope.favs = [];
    

  $scope.register = function (){
    console.log("registering");
    $http.post('https://callenderbeauty-api.herokuapp.com/register', { username: $scope.username, password: $scope.password})
    // success code
    .success(function (data, status){
      if (data.err){
          $scope.loggedIn = false; //Keep the form visible so they can try again
          $scope.message = data.err;
      } else {
          $scope.loggedIn = true;
      }
    })
    // handle error
    .error(function (data){});
  }

  $scope.login = function (){
    console.log("logging in ======ang");
    $http.post('https://callenderbeauty-api.herokuapp.com/login', { withCredentials: true, username: $scope.username, password: $scope.password})
    // success code
    .success(function (data, status){
      if (data.err){
          $scope.loggedIn = false; //Keep the form visible so they can try again
          $scope.message = data.err;
      } else {
          if (data.status == "success") {
            $cookies.username = data.username;
            $scope.loggedIn = true;
          } else {
            $scope.message = "Username or Password is incorrect"
          }
      }
    })
    // handle error
    .error(function (data){});
  }

  $scope.logout = function (){
    console.log("logging out");
    $http.get('https://callenderbeauty-api.herokuapp.com/logout').success(function (data){
      if (data.err){
        console.log(data.err);
      } else {
        $scope.loggedIn = false;
        $cookies.remove('username'); 
      }

    });
  }

  if ($cookies.myFavs != undefined) {
    $scope.favs = JSON.parse($cookies.myFavs);
    console.log("===========");
    console.log($cookies.myFavs);
    console.log("===========");
  } else {
    $scope.favs = []; 
  }

  $scope.favImg = "assets/images/icons/fav-icon.png";
  $scope.unfavImg = "assets/images/icons/empty-fav-icon.png";
  $scope.favBtn = $scope.unfavImg;

  $http.get('https://callenderbeauty-api.herokuapp.com/api/hairunits/get').then(function (result) {
    console.log(result);
    $scope.wigs = result.data;
  });

  $scope.showFavs = function(){
     if ($scope.favs.length < 1){
      $scope.hasFavorites = false;
    } else {
      $scope.hasFavorites = true;
    }
  }

  $scope.toggleFavorite = function($wigObject){
    if ($scope.favs.indexOf($wigObject) > -1) {
      $scope.favBtn = $scope.unfavImg;
      delete $wigObject.favorite;
			delete $wigObject.parentIndex;
			$scope.favs.splice($scope.favs.indexOf($wigObject), 1);
			console.log($scope.favs);
		} else {
			$scope.favBtn = $scope.favImg;
			$wigObject.parentIndex = $scope.wigs.indexOf($wigObject);
			console.log("parentIndex of wig object added:")
			console.log($wigObject.parentIndex);
			$wigObject.favorite = true;
			$scope.favs.push($wigObject);
			// console.log($scope.favs);
		}

    $scope.showFavs();
		$cookies.myFavs = JSON.stringify($scope.favs);
		$( "#sortable" ).sortable();
   	$( "#sortable" ).disableSelection();
		// console.log("just added : ");
		// console.log($scope.favs);
	}

  $scope.showFavs();
}]);

$( window ).load( function() {


  // init Isotope
  // var $container = $('.isotope').isotope({
  //   itemSelector: '.element-item',
  //   layoutMode: 'fitRows',
  //   getSortData: {
  //     name: '.name',
  //     symbol: '.symbol',
  //     number: '.number parseInt',
  //     category: '[data-category]',
  //     weight: function( itemElem ) {
  //       var weight = $( itemElem ).find('.weight').text();
  //       return parseFloat( weight.replace( /[\(\)]/g, '') );
  //     }
  //   }
  // });

  // // filter functions
  // var filterFns = {
  //   // show if number is greater than 50
  //   numberGreaterThan50: function() {
  //     var number = $(this).find('.number').text();
  //     return parseInt( number, 10 ) > 50;
  //   },
  //   // show if name ends with -ium
  //   ium: function() {
  //     var name = $(this).find('.name').text();
  //     return name.match( /ium$/ );
  //   }
  // };

  // // bind filter button click
  // $('#filters').on( 'click', 'button', function() {
  //   var filterValue = $( this ).attr('data-filter');
  //   // use filterFn if matches value
  //   filterValue = filterFns[ filterValue ] || filterValue;
  //   $container.isotope({ filter: filterValue });
  // });

  // // bind sort button click
  // $('#sorts').on( 'click', 'button', function() {
  //   var sortByValue = $(this).attr('data-sort-by');
  //   $container.isotope({ sortBy: sortByValue });
  // });
  
  // // change is-checked class on buttons
  // $('.button-group').each( function( i, buttonGroup ) {
  //   var $buttonGroup = $( buttonGroup );
  //   $buttonGroup.on( 'click', 'button', function() {
  //     $buttonGroup.find('.is-checked').removeClass('is-checked');
  //     $( this ).addClass('is-checked');
  //   });
  // });

$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('#header-wrapper').addClass("fix-nav");
  }
  else{
    $('#header-wrapper').removeClass("fix-nav");
  }
});

// if ($(this).scrollTop() > 100){  
//     $('#header-wrapper').addClass("fix-nav");
//     $('#header-wrapper').css('background-image','url("assets/images/background-images/black-granular.png")');
//   }
//   else{
//     $('#header-wrapper').removeClass("fix-nav");
//     $('#header-wrapper').css('background-image','url("assets/images/background-images/purple-granular.png")');
//   }
// });

//////////////////////////////////////////////////////
    // init Isotope for Wigs
  var $container = $('.isotope').isotope({
    itemSelector: '.hair-style',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      color: '.color',
      style: '.style',
      priceHigh: '.price parseInt',
      priceLow: '.price parseInt',
      category: '[data-category]'
    },
    sortAscending: {
    	name: true,
      	color: true,
      	style: true,
      	priceHigh: false,
     	priceLow: true,
     	category: true
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    priceGreaterThan500: function() {
      var number = $(this).find('.price').text();
      return parseInt( number, 10 ) > 500;
    }
  };

  // bind filter button click
  // $('#filters').on( 'click', 'button', function() {
  //   var filterValue = $( this ).attr('data-filter');
  //   // use filterFn if matches value
  //   filterValue = filterFns[ filterValue ] || filterValue;
  //   $container.isotope({ filter: filterValue });
  // });

   $('.filters-select').on( 'change', function() {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  // $('#sorts').on('click', 'button', function() {
  //   var sortByValue = $(this).attr('data-sort-by');
  //   $container.isotope({ sortBy: sortByValue });
  // });

   $('.sort-select').on( 'change', function() {
    // get filter value from option value
    var sortByValue = this.value;
    // use filterFn if matches value
    $container.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
  // favorites setup
  $('#favorites-tab').click(function(){
  	$('#user-favs').toggleClass('favs-closed');
  	$('#user-favs').toggleClass('favs-open');
  	
  });

   $( "#sortable" ).sortable();
   $( "#sortable" ).disableSelection();
});
