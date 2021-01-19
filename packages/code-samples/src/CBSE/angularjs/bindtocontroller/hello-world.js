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
        template: "<div>Hello {{$ctrl.name}}!</div>",
        bindToController: true,
        controllerAs: "$ctrl",
        controller: function () {
          this.name = "Pascal";
        },
        scope: {
          name: "=",
        },
      };
    });
  //#endregion directive
})(window.angular);
