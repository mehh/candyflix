'use strict';
angular.module('candyflixAngularApp')
  .controller('MoviesCtrl', function ($scope, Movies, Watchlist) {
    Watchlist.load();
    $scope.addToWatchlist = function() {
      Watchlist.add($scope.currentMovie)
      $scope.getMovie();
    }
    $scope.getMovie = function() {
      Movies.getMovie()
      .then(function(movie) {
        $scope.currentMovie = movie;
      });
    }
    $scope.nextMovieImg = function() {
      if (Movies.movies.length) {
        return Movies.movies[0].image;
      }
    }
    $scope.getMovie();
  });