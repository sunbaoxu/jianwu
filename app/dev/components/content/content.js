app.directive("myContent",function(){
	return {
		scope : {
			backBtn : "@"
		},
		templateUrl:"./components/content/content.html",
		restrict : "E",
		replace : true,
		controller: function($scope){
			/*if($scope.backBtn=="true"){
				$scope.backShow = true
			}
			else{
				$scope.backShow = false
			}

			$scope.backFn = function(){
				history.go(-1)

				$scope.$emit("to-parent",false)
			}*/
		}
	}
})