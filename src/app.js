(function(){
  'use strict';

  var app = angular.module('angularTest', []);

  app.filter('marked', ['$sce', function($sce){
    return function(rawMarkdown){
      return $sce.trustAsHtml(marked(rawMarkdown));
    };
  }]);

  app.controller('markdownController', ['$scope', function($scope){
    $scope.rawMarkdown = '';
  }]);

})();
