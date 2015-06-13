'use strict';
angular.module('candyflixAngularApp')
  .controller('WatchlistCtrl', function ($scope, Watchlist) {
    Watchlist.load();
    $scope.watchlist = Watchlist.movies;
    $scope.remove = function(movie) {
      Watchlist.delete(movie);
    }
  });