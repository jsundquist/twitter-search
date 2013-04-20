'use strict';

app.directive('directiveLink', function(){
	console.log('HELLO WORLD');
	return function(scope, element, attr){
		console.log(scope);
	}
});