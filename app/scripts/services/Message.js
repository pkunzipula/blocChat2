(function() {
	function Message($firebaseArray) {
		var message = {};
		var ref = firebase.database().ref().child('messages');
		var messages = $firebaseArray(ref);
		message.getRoomById = function(roomId) {
			var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
			return array;
		};
		return message;
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();
