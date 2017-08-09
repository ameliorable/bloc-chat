(function() {
  function UsernameCtrl($uibModalInstance, $cookies) {

    this.setUsername = function() {
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
      console.log(this.username);
    }
  };

  console.log(this.username);
  // checking to see that this ran properly and set the username

  angular
      .module('blocChat')
      .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
