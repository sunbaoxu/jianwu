app.filter("dataFilter",function(){
	return function(input){
		return input.substring(10,0)
	}
})