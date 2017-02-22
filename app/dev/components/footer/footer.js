app.directive("myFooter",function(){
	return {
		scope : {
			backBtn : "@"
		},
		templateUrl:"./components/footer/footer.html",
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