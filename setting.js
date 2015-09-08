'use strict';

var remote = require('remote');
var userState = remote.require('./user_state');

var host = userState.get("host");
document.getElementById("host").value = host;

var port = userState.get("port");
document.getElementById("port").value = port;

var nick = userState.get("nick");
document.getElementById("nick").value = nick;

var loginName = userState.get("loginName");
document.getElementById("loginName").value = loginName;

var realName = userState.get("realName");
document.getElementById("realName").value = realName;

var password = userState.get("password");
document.getElementById("password").value = password;

document.getElementById("save").addEventListener("click", function() {
  userState.set("host", document.getElementById("host").value);
  userState.set("port", document.getElementById("port").value);
  userState.set("nick", document.getElementById("nick").value);
  userState.set("loginName", document.getElementById("loginName").value);
  userState.set("realName", document.getElementById("realName").value);
  userState.set("password", document.getElementById("password").value);
});
