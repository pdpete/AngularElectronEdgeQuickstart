import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

function createWindow() {
  // Create the browser window
  win = new BrowserWindow(
    {
      width: 1600,
      height: 1200
    });

  // Loads the compiled index.html from the angular dist folder. Replace App with the name of your application
  win.loadURL(
    url.format(
      {
        pathname: path.join(__dirname, `/../../dist/App/index.html`),
        protocol: 'file:',
        slashes: true,
      })
  );

  // Uncomment below to open dev tools. Make sure to comment out before committing changes
  //win.webContents.openDevTools();

  // Event runs when the window is closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}
