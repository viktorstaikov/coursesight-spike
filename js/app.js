"use strict";

(function () {
  var app = angular.module("coursesight", ["ngRoute", "controllers", "kendo.directives"]);

  app.config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "partials/home.html",
        controller: "HomeController"
      }).otherwise({
        redirectTo: "/home"
      });
    }
  ]);
})();