/**
 * Created by Vladimir on 08.11.2015.
 */

homeModule.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/goods', {
            templateUrl: '../views/components/categories/goods.html',
            controller: 'GoodsController'
        }).
        when('/tourism', {
            templateUrl: '../views/components/categories/tourism.html',
            controller: 'TourismController'
        }).
        when('/jobs', {
            templateUrl: '../views/components/categories/jobs.html',
            controller: 'JobsController'
        }).
        otherwise({
            templateUrl: '../views/components/homePage.html',
            controller: 'HomeController'
        });
}]);