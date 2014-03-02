'use strict';

angular.module('isItAsoupDayApp')
  .controller('MainCtrl', function ($scope, $filter) {
    var isit = 'Who knows?',
        reason = '',
        day = $filter('date')(new Date(), 'EEE').toLowerCase(),
        isItTheWeekend;

    isItTheWeekend = function(day) {
      return day === 'sat' || day === 'sun';
    };

    if (day === 'fri') {
      isit = 'Nah';
      reason = 'Gotta get some good food with the whole crew!';
    } else if (isItTheWeekend(day)) {
      isit = 'Nah';
      reason = 'You\'re not at work, right?';
    }

    $scope.isit = isit;
    $scope.reason = reason;
  });
