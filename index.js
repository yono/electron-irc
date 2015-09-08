'use strict';

var irc = require('slate-irc');
var net = require('net');
var remote = require('remote');
var userState = remote.require('./user_state');

var stream = net.connect({
  port: userState.get("port"),
  host: userState.get("host")
});

var client = irc(stream);

client.pass(userState.get("password"));
client.nick(userState.get("nick"));
client.user(userState.get("loginName"), userState.get("realName"));

client.on("message", function(msg) {
  document.getElementById("thead").insertAdjacentHTML('beforeend', "<tr><td></td><td>" + msg.message + "</td></tr>");
});
