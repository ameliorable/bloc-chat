(function() {
    function HomeCtrl(Room, Message,$uibModal, $cookies) {
      this.listRooms = Room.all;
      this.currentUser = $cookies.get('blocChatCurrentUser');

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

      this.sendMessage = function() {
        Message.send(this.newMessage, this.currentRoom);
        this.newMessage = '';
      };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
