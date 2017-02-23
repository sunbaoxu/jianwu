app.controller("storeCtrl",function( $scope ,$http){
	$http.get("http://localhost:2222/server/data/data.json")
		.then(function(data){
			$scope.store_json = data.data.products;
		})
})
