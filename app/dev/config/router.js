app.config(function($stateProvider,$urlRouterProvider){
	//$urlRouterProvider.otherwise("/store");//默认跳转页面
	$stateProvider
		.state("store",{
			url:"/store",
			templateUrl:"controller/store/store.html",
			controller : "storeCtrl"
			//template :" 这是绿色页面"
		})
		//第一个参数是 URL 或者 URL 正则规则。第二个参数是路由配置对象。
		.state("space",{
			url:"/space",
			templateUrl:"controller/space/space.html"
		})
		.state("story",{
			url:"/story",
			//template :" 这是红色页面",
			templateUrl:"controller/story/story.html",
			controller : "storyCtrl"
		})
		.state("register",{
			url:"/register",
			//template :" 这是红色页面",
			templateUrl:"controller/register/register.html",
			controller : "registerCtrl"
		})
})