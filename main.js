const {app, BrowserWindow} = require('electron'); 

let server = require('./app.js');  

let mainWindow;
function createWindow () {
    /*
        For Window Appearance
        Currently, we dont need this because we running invisible server along with 
        Launcher created in .Net Framework
    */
} 
   
// Emitted when the window is closed.
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
app.quit()
} else {
app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (app) { 
    app.focus()
    }
})
    
// Create myWindow, load the rest of the app, etc...
app.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
})
}  

app.on('ready', createWindow) 
app.on('window-all-closed', function () {  
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function () {   
    if (mainWindow === null) createWindow()
}) 