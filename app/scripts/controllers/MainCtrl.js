(function() {
	function MainCtrl(Room, Message, $uibModal, $cookies) {
		var main = this;
		main.chatRoomArray = Room.all;

		main.openRoomModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/roomModal.html',
				controller: 'RoomModalCtrl',
				controllerAs: 'roomModal'
			});
		};

		main.currentRoomId = undefined;
		main.currentRoomTitle = "Pick a room to read messages";
		main.messageData = undefined;
		
		main.setCurrentRoom = function(room) {
			main.messageArray = Message.getRoomById(room.$id);
			console.log(room.$id);
			main.currentRoomId = room.$id;
			main.currentRoomTitle = room.$value;
		};

		main.sendMessage = function() {
			var sentAt = Date.now();
			if(main.message) {
				Message.send(main.message, main.currentRoomId, $cookies.get("blocChatCurrentUser"), sentAt);
				main.message="";
			} else {
				alert('Quit being a Clownpenis dot fart');
			}
		};
	}
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();