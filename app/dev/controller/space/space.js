app.controller("spaceCtrl",function( $scope ,$http){
	$http.get("http://localhost:2222/server/data/space.json")
		.then(function(data){

			console.log(data.data)
			$scope.space_json = data.data.spaces;
		})
})
.directive("spaceCont",function(){
	return{
		replace:true,
		scope : {
			spaceJson : "="
		},
		template:'<div>'+
					'<ul class="clearfix">'+
				      '<li class="product-thumb col-lg-3 col-md-3 col-sm-4   col-xs-6" ng-repeat="m in spaceJson">'+
				        '<div class="box">'+
				         ' <a href="javascript:;">'+
				            '<div class="content">'+
				                '<img src="{{m.thumb}}" class="img-responsive" alt="{{m.intro}}">'+
				            '</div>'+
				          '</a>'+
				          '<div class="info">'+
				            '<div class="one ">{{m.name}}</div>'+
				          '</div>'+
				        '</div>'+
				      '</li>'+
				    '</ul>'+
				'</div>',
		controller : function($scope,$timeout){


		}
	}
	
})