(function(){
  'use strict';

  var app = angular.module('angularTest', []);

  app.controller('markdownController', ['$scope', '$sce', function($scope, $sce){

    $scope.markdownHtml = '';

    $scope.renderMarkdown = function(){
      $scope.markdownHtml = $sce.trustAsHtml(marked($scope.markdownInput));
    };

  }]);

})();
