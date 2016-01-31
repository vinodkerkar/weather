// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var weatherApp = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

weatherApp.controller('weatherController', function($scope,$http){
  $scope.getData = function() {
        $http.get("http://api.openweathermap.org/data/2.5/weather?zip=22102,us&appid=44db6a862fba0b067b1930da0d769e98")
            .success(function(data) {
                $scope.main=data.weather[0].main;
                $scope.desc=data.weather[0].description;
                $scope.temp=data.main.temp;
                $scope.tempMin=data.main.temp_min;
                $scope.tempMax=data.main.temp_max;
                $scope.humidity=data.main.humidity;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
})
