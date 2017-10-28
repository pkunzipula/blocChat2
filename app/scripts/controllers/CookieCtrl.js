(function() {
	function BlocChatCookies($cookies, $uibModal) {
		alert("HEY NOW!");
	}
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();