app.directive("myHeader",function(){
	return {
		scope : {
			backBtn : "@"
		},
		templateUrl:"./components/header/header.html",
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