'use strict';

angular
  .module('candyflixAngularApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })  

      .when('/watchlist', {
              templateUrl: 'views/watchlist.html',
              controller: 'WatchlistCtrl'
            })
      
      .otherwise({
        redirectTo: '/'
      });
  });
