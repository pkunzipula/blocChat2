(function() {
	function RoomModalCtrl(Room, $uibModalInstance) {
		var roomModal = this;
		roomModal.statusBar = "I am serious. But don't call it Shirley.";

		/*  just trying this
		roomModal.chatArray = Room.all;
		roomModal.addRoom = function() {
			if(roomModal.roomData) {
				roomModal.chatArray.$add(roomModal.roomData);
				roomModal.cancel();
				console.log('Room ' + roomModal.roomData + ' was added. Sweet.')
			} else {
				alert('You go now!');
			}
		};
		that's all for now */

		roomModal.addRoom = function() {
			if(roomModal.roomData) {
				Room.addNewRoom(roomModal.roomData);
				roomModal.cancel();
			} else {
				alert('Please to be entering something here and thank you.');
			}
		};
		roomModal.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}
	angular
		.module('blocChat')
		.controller('RoomModalCtrl', ['Room', '$uibModalInstance', RoomModalCtrl]);
})();