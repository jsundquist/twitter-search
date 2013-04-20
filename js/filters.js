'use strict';

app.filter('addLink', function(){
	
	return function(input, scope){

		var handleRegex = /(@[a-zA-z0-9_]{1,15})/,
			hashtag = /(#[a-zA-z][a-zA-z0-9]+)/,
			matches,
			qualities = [];

		return input.replace(handleRegex, '<a href="https://twitter.com/$1">$1</a>').replace(hashtag, '<a href="https://twitter.com/search?q=$1&src=hash">$1</a>');
	}
});