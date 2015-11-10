/**
 * Created by Vladimir on 08.11.2015.
 */

homeModule.controller('HomeController', ['$scope', '$rootScope', '$q', '$http', '$timeout', function($scope, $rootScope, $q, $http, $timeout) {
    $scope.webPageName = "ReviewIt";
    $scope.bannerIndex = 1;

    $scope.changeBannerIndex = function(bannerIndex) {
        $scope.bannerIndex = bannerIndex;
    }
}]);