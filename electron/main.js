// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
const url = require("url");
const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const urlConfig = './config.json';

function createWindow () {
  // Create the browser window.
  //mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  //mainWindow.on('closed', function () {
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  //mainWindow = null
  //})

  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // load the dist folder from Angular
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/frontend/index.html`),
      //pathname: path.join('', `D://Workspace/HDBS/electrondev/dist/frontend/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  const initCfg = {
    "saveTo": "X://saveto/testhaukute.txt",
    "endPoint":"http://localhost:8080/server/api/"
  };
  fs.exists(urlConfig, (exists) => {
    if (!exists){
    fs.writeFile(urlConfig, JSON.stringify(initCfg), function(err){
      console.log('init config file');
    })
  }
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

ipcMain.on("saveFile", function(event, arg){
  arg = {
    baseCode: 'PNB',
    canSize: 0.75,
    formulaColourants: [
      {colourantCode: "NS", quantity: 0.185357},
      {colourantCode: "LS", quantity: 0.185357},
      {colourantCode: "TS", quantity: 0.185357},
    ]
  };

  var formulaLog = [];
  for(var i = 0; i < arg.formulaColourants.length; i++){
    var formulaData = arg.formulaColourants[i];
    formulaLog.push(`"${formulaData.colourantCode}"`);
    formulaLog.push(`${formulaData.quantity}`);
  }

var flinkData =
`@RUN
@WGH 0
@UNT 1.0 1.0
@LQT 1
@PRD "INT" "GCS INTERIOR ENV.WHITE"
@BAS "${arg.baseCode}"
@CLR "NCS S 0500-N"
@CAN "${arg.canSize}L" 712
@FRM 712
@CNT ${formulaLog.join(' ')}
@LOG "F";"WB000";"INT";"NCS S 0500-N";"";49016559;"PNB";712;"${arg.canSize}L";1;"";43432.489;3;${formulaLog.join(';')}
@END`;

  fs.readFile('./config.json', function read(err, data) {
    if (err) {
      throw err;
    }
    console.log("read config: " + data);
    content = JSON.parse(data);
    console.log("url save: " + content.saveTo);
    if(content.saveTo){
      fs.writeFile(content.saveTo, flinkData, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
    }
  });
});

ipcMain.on("readFile", (event, arg) => {
  fs.readFile('./config.json', function read(err, data) {
  console.log("data read: " + data);
  mainWindow.webContents.send("getFilesResponse", data);
});
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
