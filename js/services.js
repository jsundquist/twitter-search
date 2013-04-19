'use strict';

app.factory("TwitterService", function ($resource) {
	return $resource('http://search.twitter.com/:action',
		{action:'search.json', q:'AngularJS', callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}});
});