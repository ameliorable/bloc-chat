(function() {
    function HomeCtrl(Room) {
      this.listRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
