const protect = require("static-auth");

const route = "/";
const { USERNAME, PASSWORD } = process.env;
const isAuthenticated = (user, pass) => user === USERNAME && pass === PASSWORD;

const options = {
  directory: __dirname + "/public",
};
const app = protect(route, isAuthenticated, options);
module.exports = app;
