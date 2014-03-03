'use strict';

angular.module('isItAsoupDayApp')
  .provider('Weather', function () {
    this.$get = function ($http) {
      var service = {
        getWeather: function() {
          return $http({
            method: 'JSONP',
            // TODO: stuff away the API key
            // TODO: make the lat/long configurable
            url: 'https://api.forecast.io/forecast/dbbb20e349ce8113a6a2b9d2eda05d5b/40.7507,-73.9965',
            params: {
              callback: 'JSON_CALLBACK'
            }
          });
        }
      };

      return service;
    };
  });