(function (angular) {
  "use strict";

  const app = angular.module("helloWorldApp", []);

  app.controller("MainCtrl", MainCtrl);

  function MainCtrl() {
    this.name = "World";
  }

  //#region component
  angular.module("helloWorldApp").component("helloWorld", {
    template: "<div>Hello {{$ctrl.name}}!</div>",
    bindings: {
      name: "=",
    },
  });
  //#endregion component
})(window.angular);
