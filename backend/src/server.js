"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var server = app_1["default"].listen(app_1["default"].get('port'), function () {
    console.log("Server is listening on port " + app_1["default"].get('port') + " - " + app_1["default"].get('env'));
});
exports["default"] = server;
