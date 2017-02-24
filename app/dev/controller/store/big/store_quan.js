
app.controller("store_quanCtrl",function( $scope ,$http){
	$http.get("http://localhost:2222/server/data/data.json")
		.then(function(data){
			$scope.store_json = data.data.products;
		})
})
.directive("storeQuan",function(){
	return {
		/*scope : {
			
		},
		templateUrl:"./components/store/store_quan.html",
		restrict : "E",
		replace : true,
		controller: function($scope,$timeout){

		
		}*/
	}
})
