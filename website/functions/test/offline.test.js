import { assert } from "chai";
import sinon from "sinon";

// Require firebase-admin so we can stub out some of its methods.
import admin from "firebase-admin";
// Require and initialize firebase-functions-test. Since we are not passing in any parameters, it will
// be initialized in an "offline mode", which means we have to stub out all the methods that interact
// with Firebase services.
import firebaseTest from "firebase-functions-test";

const test = firebaseTest();

describe("Cloud Functions", () => {
  let myFunctions;
  let adminInitStub;

  before(async () => {
    // [START stubAdminInit]
    // If index.js calls admin.initializeApp at the top of the file,
    // we need to stub it out before requiring index.js. This is because the
    // functions will be executed as a part of the require process.
    // Here we stub admin.initializeApp to be a dummy function that doesn't do anything.
    adminInitStub = sinon.stub(admin, "initializeApp");
    // Now we can require index.js and save the exports inside a namespace called myFunctions.
    myFunctions = await import("../index.js");
    // [END stubAdminInit]
  });

  after(() => {
    // Restore admin.initializeApp() to its original method.
    adminInitStub.restore();
    // Do other cleanup tasks.
    test.cleanup();
  });

  describe("httpRequestHandler", () => {
    // eslint-disable-next-line arrow-body-style
    it("should fail", () => {
      return assert.equal(true, false);
    });
  });
});
