(function (angular) {
  "use strict";

  angular.module("helloWorldApp", []);

  angular
    .module("helloWorldApp")
    .controller("MainCtrl", MainCtrl);

  function MainCtrl() {
    this.name = "World";
  }

  //#region directive
  angular
    .module("helloWorldApp")
    .directive("helloWorld", function () {
      return {
        restrict: "E",
        //#region template
        template: "<div>Hello {{$scope.name}}!</div>",
        //#endregion template
      };
    });
  //#endregion directive
})(window.angular);
