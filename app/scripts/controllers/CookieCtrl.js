(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if(!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/userModal.html',
				controller: 'UserModalCtrl',
				controllerAs: 'userModal'
			});
		}
	}
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();