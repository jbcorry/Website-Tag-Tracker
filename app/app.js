angular.module('mainApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
              .state('home', {
                  url: '/',
                  // controller: 'ModalCtrl',
                  templateUrl: 'views/home.html'
              })
              .state('tracker', {
                  url: '/track',
                  templateUrl: 'views/tracker.html'
                  // ,controller: 'loginCtrl'
              });

});
