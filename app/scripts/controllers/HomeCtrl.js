(function() {
    function HomeCtrl(Room, $uibModal) {
      this.listRooms = Room.all;

      this.open = function() {
        $uibModal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl as modal'
        });
      };
      // when the button on the home screen is clicked, the modal template will be launched

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
