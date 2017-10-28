(function() {
	function ModalCtrl(Room, $uibModalInstance) {
		var modal = this;
		modal.statusBar = "Type in a room name";
		modal.addRoom = function() {
			if(modal.roomData) {
				Room.addNewRoom(modal.roomData);
				modal.cancel();
			} else {
				alert('Please to be entering something here and thank you.');
			}
		};
		modal.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}
	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();