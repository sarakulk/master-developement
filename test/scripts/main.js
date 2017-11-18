var app = angular.module("app", ["ngResource", "ngRoute"]);


app.config(function($routeProvider) {

app.controller("mainController", function($scope) {
    $scope.title = "Home";
});