/**
 * Created by Vladimir on 08.11.2015.
 */

homeModule.controller('HomeController', ['$scope',function($scope) {
    $scope.webPageName = "ReviewIt";
    $scope.bannerIndex = 1;

    $scope.changeBannerIndex = function(bannerIndex) {
        $scope.bannerIndex = bannerIndex;
        console.log(bannerIndex);
    }
}]);