app.controller("storyCtrl",function( $scope,$http ){
	$http.get("http://localhost:8090/json?page=3")
		.then(function(data){
			console.log(data.data.articles)
			$scope.story_json=data.data.articles
		})
})