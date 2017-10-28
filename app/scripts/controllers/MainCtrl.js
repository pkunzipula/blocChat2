(function() {
	function MainCtrl(Room, Message, $uibModal) {
		var main = this;
		main.chatRoomArray = Room.all;
		main.currentRoomTitle = "Pick a room to read messages";
		main.openRoomModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl',
				controllerAs: 'modal'
			});
		};
		main.setCurrentRoom = function(room) {
			main.messageArray = Message.getRoomById(room.$id);
			console.log(room.$id);
			main.currentRoomId = room.$id;
			main.currentRoomTitle = room.$value;
		};
	}
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();