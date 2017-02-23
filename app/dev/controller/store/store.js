app.controller("storeCtrl",function( $scope ,$http){
	$http.get("http://localhost:2222/server/data/data.json")
		.then(function(data){

			console.log(data.data.products)
			$scope.store_json = data.data.products;
		})
})
.directive("storeCont",function(){
	return{
		replace:true,
		scope : {
			storeJson : "="
		},
		template:'<div>'+
					'<ul class="clearfix">'+
				      '<li class="product-thumb col-lg-3 col-md-3 col-sm-4   col-xs-6" ng-repeat="m in storeJson">'+
				        '<div class="box">'+
				         ' <a href="javascript:;">'+
				            '<div class="content">'+
				                '<img src="{{m.thumb}}" class="img-responsive" alt="{{m.brand}}">'+
				            '</div>'+
				          '</a>'+
				          '<div class="info">'+
				            '<div class="name">'+
				              '<a href="javascript:;">{{m.brand}}</a>'+
				            '</div>'+
				            '<div class="p">'+
				              '<div class="price">'+
				                '￥{{m.price}}'+
				              '</div>'+
				              '<div class="fav">'+
				                '<span class="icon glyphicon glyphicon-heart-empty"></span>{{m.favs_count}}'+
				              '</div>'+
				            '</div>'+
				            '<div class="one ">{{m.one_liner}}</div>'+
				          '</div>'+
				        '</div>'+
				      '</li>'+
				    '</ul>'+
				'</div>',
		controller : function($scope,$timeout){

			$timeout(function(){


				//console.log($scope.storeJson)







			},1000)


		}
	}
	
})