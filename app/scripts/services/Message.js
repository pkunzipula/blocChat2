(function() {
	function Message($firebaseArray) {
		var message = {};
		var ref = firebase.database().ref().child('messages');
		var messages = $firebaseArray(ref);

		message.getRoomById = function(roomId) {
			var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
			return array;
		};

		message.send = function(newMessage, roomId, username, sentAt) {
			console.log('Message sent by ' + username);
			messages.$add({
				content : newMessage, 
				roomId: roomId,
				username : username,
				sentAt: sentAt
			});
		}; 
		return message;
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();