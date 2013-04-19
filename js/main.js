'use strict';

// load angular module
var app = angular.module("TwitterSearcher", ['ngResource', 'ui']);

app.controller("TwitterCtrl", function ($scope, TwitterService) {

	// Default Values
	$scope.searchTerm = 'AngularJS';
	$scope.pager = 1;
	$scope.noback = true;

	// Bind Service to the Scope
	$scope.twitter = TwitterService;

	// Initial Call for Data
	$scope.twitterResult = $scope.twitter.get();

	// Search based on the input field Search
	$scope.doSearch = function() {
		$scope.pager = 1;
		$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm});
	}

	// Decrement the page model
	// query the api with page param
	$scope.prevPage = function(pager) {
		if(pager > 1) {
			$scope.pager = pager - 1;
			$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm,page:$scope.pager});
		}
		else {
			$scope.noback = true;
			$scope.pager = $scope.pager;
		}

	}

	// Increment the page model
	// query the api with page param
	$scope.nextPage = function(pager) {
		$scope.noback = false;
		$scope.pager = pager + 1;
		$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm,page:$scope.pager});
	}

	// debug watch for Resultset from Twitter
	$scope.$watch('twitterResult', function() {
		console.log($scope.twitterResult);
	});

});