app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");//默认跳转页面
	$stateProvider
		.state("home",{
			url:"/home",
			templateUrl:"controller/home/home.html",
			controller : "homeCtrl"
		})
		.state("store",{
			url:"/store",
			templateUrl:"controller/store/store.html",
			controller : "storeCtrl"
			//template :" 这是商城页面"
		})
		//第一个参数是 URL 或者 URL 正则规则。第二个参数是路由配置对象。
		.state("space",{
			url:"/space",
			//template :" 这是空间页面",
			templateUrl:"controller/space/space.html",
			controller : "spaceCtrl"
		})
		.state("story",{
			url:"/story",
			//template :" 这是故事页面",
			templateUrl:"controller/story/story.html",
			controller : "storyCtrl"
		})
		.state("register",{
			url:"/register",
			//template :" 这是登录页面",
			templateUrl:"controller/register/register.html",
			controller : "registerCtrl"
		})
		.state("store.visitor",{
			url:"/store.visitor",
			templateUrl:"controller/store/big/store_visitor.html",
			controller : "store_visitorCtrl"
		})
		.state("store.quan",{
			url:"/store.quan",
			templateUrl:"controller/store/big/store_quan.html",
			controller : "store_quanCtrl"
		})
		.state("store.fen",{
			url:"/store.fen",
			templateUrl:"controller/store/xiao/store_fen.html",
			controller : "store_fenCtrl"
		})
		.state("store.feature",{
			url:"/store.feature",
			templateUrl:"controller/store/xiao/store_feature.html",
			controller : "store_fenCtrl"
		})
		.state("store.texture",{
			url:"/store.texture",
			templateUrl:"controller/store/xiao/store_texture.html",
			controller : "store_fenCtrl"
		})
})