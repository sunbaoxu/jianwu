app.controller("storeCtrl",function( $scope ,$http){
	$http.get("http://localhost:8090/json?page=1")
		.then(function(data){
			
			$scope.store_json = data.data.products;
		})
})
