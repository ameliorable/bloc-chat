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

          // .state('modal', {
          //   url: '/modal',
          //   controller: 'ModalCtrl as modal',
          //   templateUrl: '/templates/modal.html'
          // });

          // .state('room', {
          //   url: '/',
          //   controller: 'RoomCtrl as room',
          //   templateUrl: '/templates/home.html'
          // });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();
