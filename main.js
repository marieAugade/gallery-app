const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800, 
    height: 800,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/angular-electron/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

  // win dev tool
  // win.webContents.openDevTools();

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)