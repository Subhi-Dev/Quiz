const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const app = electron.app
const url = require('url')
const Menu = electron.Menu
const fs = require('fs')

function open1lev() {
    const levpath = path.join('file://',__dirname,'1lev/1lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.webContents.openDevTools()
    levwin.on('closed', () => {
        check()
    })
}
function open2lev() {
    const levpath = path.join('file://',__dirname,'2lev/2lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.webContents.openDevTools()
    levwin.on('closed', () => {
      check()
  })

}
function open3lev() {
    const levpath = path.join('file://',__dirname,'3lev/3lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open4lev() {
    const levpath = path.join('file://',__dirname,'4lev/4lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open5lev() {
    const levpath = path.join('file://',__dirname,'5lev/5lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open6lev() {
    const levpath = path.join('file://',__dirname,'6lev/6lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open7lev() {
    const levpath = path.join('file://',__dirname,'7lev/7lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open8lev() {
    const levpath = path.join('file://',__dirname,'8lev/8lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open9lev() {
    const levpath = path.join('file://',__dirname,'9lev/9lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
function open10lev() {
    const levpath = path.join('file://',__dirname,'1lev/1lev.html')
    let levwin = new BrowserWindow({alwaysOnTop: true})
    levwin.loadURL(levpath);
    levwin.show()
    levwin.on('closed', () => {
      check()
  })

}
check()

function check() {
  var v = "C:/Users/Code/Desktop/Quiz-Time";


    fs.readFile(v.concat('/1lev/1lev.txt'), 'utf-8', (err, data) => {
      if (data == "3") {
        document.getElementById("two").disabled = false;
        data = "0";
      }
    });
    fs.readFile(v.concat('/2lev/2lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("thr").disabled = false;
        data = "0";

      }
    });
    fs.readFile(v.concat('/3lev/3lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("fou").disabled = false;
        data = "0";
      }
    });
    fs.readFile(v.concat('/4lev/4lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("fiv").disabled = false;
        data = "0";
      }
    });
    fs.readFile(v.concat('/5lev/5lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("six").disabled = false;
        data = "0";
      }
    });
    fs.readFile(v.concat('/6lev/6lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("sev").disabled = false;
        data = "0";
      }
    });
    fs.readFile(v.concat('/7lev/7lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("eig").disabled = false;
        data = "0";

      }
    });
    fs.readFile(v.concat('/8lev/8lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("nin").disabled = false;
        data = "0";

      }
    });
    fs.readFile(v.concat('/9lev/9lev.txt'), 'utf-8', (err, data) => {
        
      if (data == "3") {
        document.getElementById("ten").disabled = false;
        data = "0";
      }
    });
}
function reset(){

  var filepath = "C:/Users/Code/Desktop/Quiz-Time/";// Previously saved path somewhere

  if (fs.existsSync(filepath.concat('1lev/1lev.txt'))) {
      fs.unlink(filepath.concat('1lev/1lev.txt'), (err) => {
          if (err) {
              alert("An error ocurred updating the file" + err.message);
              console.log(err);
              return;
          }
      });
  } 
  if (fs.existsSync(filepath.concat('2lev/2lev.txt'))) {
    fs.unlink(filepath.concat('2lev/2lev.txt'), (err) => {
        if (err) {
            alert("An error ocurred updating the file" + err.message);
            console.log(err);
            return;
        }
    });
} 
if (fs.existsSync(filepath.concat('3lev/3lev.txt'))) {
  fs.unlink(filepath.concat('3lev/3lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('4lev/4lev.txt'))) {
  fs.unlink(filepath.concat('4lev/4lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
          
      }
  });
} 
if (fs.existsSync(filepath.concat('5lev/5lev.txt'))) {
  fs.unlink(filepath.concat('5lev/5lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('6lev/6lev.txt'))) {
  fs.unlink(filepath.concat('6lev/6lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('7lev/7lev.txt'))) {
  fs.unlink(filepath.concat('7lev/7lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('8lev/8lev.txt'))) {
  fs.unlink(filepath.concat('8lev/8lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('9lev/9lev.txt'))) {
  fs.unlink(filepath.concat('9lev/9lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
if (fs.existsSync(filepath.concat('10lev/10lev.txt'))) {
  fs.unlink(filepath.concat('10lev/10lev.txt'), (err) => {
      if (err) {
          alert("An error ocurred updating the file" + err.message);
          console.log(err);
          return;
      }
  });
} 
document.getElementById("reset").textContent = "Please restart application";

}
