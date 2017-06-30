(function() {
    function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
          });

      $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '/templates/home.html'
          });
    }
// Added 'ngRoute' to dependencies to try to fix "Uncaught Error: [$injector:modulerr]"
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
