(function() {
  function RoomCtrl($scope, Room) {
    console.log(Room.rooms);
    // $scope.listRooms = Room;
    // $scope.listRooms = Room.Room.all;
    // this.listRooms = Room;
    // $scope.listRooms = $firebaseArray(ref);
    $scope.listRooms = Room.rooms;
  }

  angular
      .module('blocChat')
      .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();


// (function() {
//   function Room($firebaseArray) {
//     var Room = {};
//     var ref = firebase.database().ref().child("rooms");
//     var rooms = $firebaseArray(ref);
//
//     Room.all = rooms;
//
//     return Room;
//   }
//
//   angular
//       .module('blocChat')
//       .factory('Room', ['$firebaseArray', Room]);
// })();

// <h1>Bloc Chat</h1>
// <ul>
//   <li ng-repeat="room in room.listRooms">{{ room.room }}</li>
// </ul>
