app.directive("myHeader",function(){
	return {
		scope : {
			backBtn : "@"
		},
		templateUrl:"./components/header/header.html",
		restrict : "E",
		replace : true,
		controller: function($scope){
			
		}
	}
})