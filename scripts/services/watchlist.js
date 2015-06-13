'use strict';
angular.module('candyflixAngularApp')
  .service('Watchlist', function() {
    this.movies = [];
    function save(movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
    this.add = function(movie) {
      this.movies.push(movie);
      save(this.movies);
    }
    this.delete = function(movie) {
      this.movies.splice(movie, 1);
      save(this.movies);
    }
    this.load = function() {
      this.movies = JSON.parse(localStorage.getItem('movies')) || []
    }
  });