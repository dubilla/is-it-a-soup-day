'use strict';

angular.module('isItAsoupDayApp')
  .controller('MainCtrl', function ($scope, $filter, Weather) {
    // TODO: Need to set up testing to configure day
    var day = $filter('date')(new Date(), 'EEE').toLowerCase(),
        isItTheWeekend;

    isItTheWeekend = function(day) {
      return day === 'sat' || day === 'sun';
    };

    if (day === 'fri') {
      $scope.isit = 'Nah';
      $scope.reason = 'Gotta get some good food with the whole crew!';
    } else if (isItTheWeekend(day)) {
      $scope.isit = 'Nah';
      $scope.reason = 'You\'re not at work, right?';
    } else {
      Weather.getWeather().then(function(data) {
        var now = data.data.currently,
            // The Metric
            // I have no idea. Need to tweak all of this.
            // Especially Precipitation. I have no idea what is appropriate here.
            isit = now.apparentTemperature < 40 || now.visibility < 5 || now.precipProbability > 50 || (now.precipIntensity > 10 && now.precipIntensity < 50);

        if (isit) {
          $scope.isit = 'Do it';
          $scope.reason = 'Oh, the weather outside is weather...';
        } else if (now.visibility < 5) {
          $scope.isit = 'Nah';
          $scope.reason = 'A bit warm, right?';
        }
      });
    }
  });
