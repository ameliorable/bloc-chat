(function() {
    function ModalCtrl($uibModalInstance, Room) {
      // need methods to open, close, and submit data to Firebase
      this.createRoom = function() {
        Room.add(this.newRoom);
        $uibModalInstance.close();
      };
      // open and create new room

      this.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
      // close and dismiss creating a new room
    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
