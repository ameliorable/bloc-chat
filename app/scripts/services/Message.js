// constructor functions --> look up js capitalization
(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      // filter the messages by their room ID
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

// for sentAt, how do I get it to show a time format that makes sense instead of just the timestamp?

    Message.send = function(newMessage, currentRoom) {
      messages.$add({
        content: newMessage,
        roomId: currentRoom.$id,
        sentAt: firebase.database.ServerValue.TIMESTAMP,
        username: $cookies.get('blocChatCurrentUser')
      });
      this.messages = '';
    };

    return Message;
  };

  angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
