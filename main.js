'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

var Menu = require('menu');

// test
var path = require('path');
var fs = require('fs');
var data = null;
var dataFilePath = path.join(app.getPath('userData'), 'data.json')

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  if (fs.existsSync(dataFilePath)) {
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    installMenu();
  } else {
    mainWindow.loadUrl('file://' + __dirname + '/setting.html');
    installMenu();
  }

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

function installMenu() {
  var menu = Menu.buildFromTemplate([
    {
      label: 'Sample',
      submenu: [
        {
          label: 'Setting',
          click: function() { }
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}
