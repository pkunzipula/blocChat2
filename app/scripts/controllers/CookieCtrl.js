(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if(!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/userModal.html',
				controller: 'UserModalCtrl',
				controllerAs: 'userModal',
				backdrop: 'static',
				keyboard: false
			});
		}
	}
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();