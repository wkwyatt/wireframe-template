// $('.carousel').carousel()
// external js: isotope.pkgd.js
var favorites = 0;

var wireframeApp = angular.module('wireframeApp', ['ngCookies']);
wireframeApp.controller('hairStyleController',[ function($scope) {
	console.log($scope);
	$scope.favs = [];
	$scope.favImg = "assets/images/icons/fav-icon.png";
	$scope.unfavImg = "assets/images/icons/empty-fav-icon.png";
	$scope.favBtn = $scope.unfavImg;
	$scope.wigs = [
		{
			name: "Emotion",
			style: "wavy",
			color: "brunnette",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/w/ewemotion_06_lg.jpg",
			price: 1780
		},
		{
			name: "Carrie",
			style: "wavy",
			color: "red",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/j/r/jr5141_01_sm_1.jpg",
			price: 699
		},
		{
			name: "Award",
			style: "short",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/w/ewaward_04_lg.jpg",
			price: 980
		},
		{
			name: "H-311",
			style: "short",
			color: "red",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/v/f/vfh311_01_lg.jpg",
			price: 45
		},
		{
			name: "Knockout",
			style: "long",
			color: "red",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/r/w/rwknock_01_sm.jpg",
			price: 172
		},
		{
			name: "Angled Tomboy",
			style: "short",
			color: "black",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/n/w/nw1111_08.31-01_lg.jpg",
			price: 68
		},
		{
			name: "Queenie",
			style: "wavy",
			color: "black",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/v/f/vfqueen_01_lg.jpg",
			price: 289
		},
		{
			name: "Casual Curl",
			style: "curly",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/n/w/nw1101_01_sm.jpg",
			price: 889
		},
		{
			name: "Big-Wave Bob",
			style: "short",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/n/w/nw1105_01_sm.jpg",
			price: 899
		},
		{
			name: "Tuscany",
			style: "wavy",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/r/w/rwtuscany_01_sm.jpg",
			price: 2711
		},
		{
			name: "Spirit",
			style: "long",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/j/r/jr731_01_lg.jpg",
			price: 2533
		},
		{
			name: "Christina Human Hair",
			style: "long",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/w/p/wp117_11_lg_1.jpg",
			price: 1498
		},
		{
			name: "Lynsey",
			style: "long",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/y/eylynsey_09.29-03_lg.jpg",
			price: 733
		},
		{
			name: "Heather",
			style: "short",
			color: "red",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/y/eyheather_01_lg.jpg",
			price: 873
		},
		{
			name: "Spicy",
			style: "wavy",
			color: "red",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/j/r/jr5144_01_sm_2.jpg",
			price: 4822
		},
		{
			name: "Anne",
			style: "short",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/j/r/jr5384_01_lg.jpg",
			price: 360
		},
		{
			name: "Goddess",
			style: "wavy",
			color: "blonde",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/r/w/rwlimel_01_sm_1.jpg",
			price: 329
		},
		{
			name: "Diamond",
			style: "long",
			color: "brunnette",
			image: "http://wigskin.s3.amazonaws.com/media.2/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/f/lf9013_01_20131031.jpg",
			price: 1500
		}	
	];


	$scope.toggleFavorite = function($wigObject){
		if ($scope.favs.indexOf($wigObject) > -1) {
			console.log($scope.favs.length);
			$scope.favBtn = $scope.unfavImg;
			delete $wigObject.favorite;
			$scope.favs.splice($scope.favs.indexOf($wigObject), 1);
			console.log($scope.favs);
		} else {
			$scope.favBtn = $scope.favImg;
			$wigObject.favorite = true;
			$scope.favs.push($wigObject);
			// console.log($scope.favs);
		}
		
		$( "#sortable" ).sortable();
   		$( "#sortable" ).disableSelection();
		// console.log("just added : ");
		// console.log($scope.favs);
	}
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
