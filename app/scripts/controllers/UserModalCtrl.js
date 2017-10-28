(function() {
	function UserModalCtrl($cookies, $uibModalInstance) {
		var userModal = this;
		userModal.statusBar = '(Your real identity is just 2 embarrassing)';

		userModal.setCurrentUser = function() {
			if(userModal.username) {
				$cookies.put('blocChatCurrentUser', userModal.username);
				$uibModalInstance.close();
			} else {
				alert('Try again, Skippy. SAY! That\'s a good name for ya. Whaddya say, ol\' Skip, ol\' buddy, ole pal?');
			}
		};
	}
	angular
		.module('blocChat')
		.controller('UserModalCtrl',['$cookies', '$uibModalInstance', UserModalCtrl]);
})();