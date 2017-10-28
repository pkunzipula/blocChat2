(function() {
	function BlocChatCookies() {
		alert("HEY NOW!");
	}
	angular
		.module('blocChat')
		.run(BlocChatCookies);
})();