(function (angular) {
  "use strict";

  const app = angular.module("helloWorldApp", []);

  app.controller("MainCtrl", MainCtrl);

  function MainCtrl() {
    this.name = "World";
  }

  //#region directive
  app.directive("helloWorld", function () {
    return {
      restrict: "E",
      //#region controllerAs
      template: "<div>Hello {{$ctrl.name}}!</div>",
      controllerAs: "$ctrl",
      //#endregion controllerAs
      //#region controller
      controller: function ($scope) {
        this.name = "Pascal";

        $scope.$watch(
          "name",
          function (newValue) {
            this.name = newValue;
          }.bind(this)
        );
      },
      //#endregion controller
      //#region scope
      scope: {
        name: "=",
      },
      //#endregion scope
    };
  });
  //#endregion directive
})(window.angular);
