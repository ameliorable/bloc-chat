(function() {
    function HomeCtrl(Room, Message,$uibModal) {
      this.listRooms = Room.all;

      this.open = function() {
        $uibModal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl as modal'
        });
      }
      // when the button on the home screen is clicked, the modal template will be launched
      // need function to set the current room so it knows what messages to display
      this.setCurrentRoom = function(room) {
        this.currentRoom = room;
        this.messages = Message.getByRoomId(this.currentRoom.$id);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
