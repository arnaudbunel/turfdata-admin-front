'use strict';

/* Directives */

var orthosmbDirectives = angular.module('turfdataDirectives', []);

orthosmbDirectives.directive('loading',   ['$http' ,function ($http)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
               	scope.chargementEnCours = v;
            });
        }
    };
}]);