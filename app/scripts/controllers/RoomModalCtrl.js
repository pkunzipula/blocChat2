(function() {
	function RoomModalCtrl(Room, $uibModalInstance) {
		var roomModal = this;
		roomModal.statusBar = "Type in a room name";
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