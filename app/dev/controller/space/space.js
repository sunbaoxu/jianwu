app.controller("spaceCtrl",function( $scope ,$http){
	$http.get("http://localhost:8090/json?page=2")
		.then(function(data){
			console.log(data)

			$scope.space_json = data.data.spaces;
		})
})
.directive("spaceCont",function(){
	return{
		/*replace:true,
		scope : {
			spaceJson : "="
		},
		template:"",
		controller : function($scope,$timeout){


		}*/
	}
	
})