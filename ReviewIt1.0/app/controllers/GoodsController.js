/**
 * Created by Vladimir on 08.11.2015.
 */

categoriesModule.controller('GoodsController', ['$scope', '$http', '$rootScope', '$q', function($scope, $http, $rootScope, $q){
    $scope.categories = [];
    $scope.filters = {
        order: 'Rating ascending'
    };

    $scope.items = [];

    $scope.filterLabels = {
        sorting: [ 'Rating ascending', 'Rating descending', 'Reviews ascending', 'Reviews descending' ]
    };

    function Category(name, subcategoriesArray, htmlID) {
        this.name = name;
        this.htmlID = htmlID;
        this.subcategories = subcategoriesArray;
        console.log(subcategoriesArray);
        this.numberOfSubcategories = this.subcategories.length;
    }

    function getCategoriesByHttpGet() {
        return new $q(function(resolve){
            $http.get('/ReviewIt1.0/app/resources/data/categories.txt').then(function (response) {
                resolve(response.data);
            });
        });
    }

    function createCategoriesObjects(categoriesJson) {
        for (var index in categoriesJson) {
            $scope.categories.push(new Category(categoriesJson[index].name, categoriesJson[index].subcategories,
                categoriesJson[index].id));
        }
    }

    getCategoriesByHttpGet().then(function(categoriesJson) {
        createCategoriesObjects(categoriesJson);
    });

}]);