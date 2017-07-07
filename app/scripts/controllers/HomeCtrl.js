(function() {
    function HomeCtrl($scope, Room) {
      console.log(Room.all);
      $scope.listRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
