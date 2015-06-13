'use strict';
angular.module('candyflixAngularApp')
  .service('Movies', function($http, $q) {
    this.movies = [];
    var API = 'https://candyflix-api.herokuapp.com';
    function loadMovies() {
      var deferred = $q.defer();
      $http.get(API + '/randomMovies')
      .then(function(res) {
        deferred.resolve(res.data);
      })
      return deferred.promise;
    }
    this.getMovie = function() {
      var deferred = $q.defer();
      var service = this;
      if (service.movies.length > 3) {
        deferred.resolve(service.movies.shift());
      } else if (service.movies.length) {
        deferred.resolve(service.movies.shift());
        loadMovies()
        .then(function(data) {
          service.movies = service.movies.concat(data);
        })
      } else {
        loadMovies()
        .then(function(data) {
          service.movies = service.movies.concat(data);
          deferred.resolve(service.movies.shift());
        })
      }
      return deferred.promise;
    }
  });