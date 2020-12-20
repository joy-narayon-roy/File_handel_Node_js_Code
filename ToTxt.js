const fs = require("fs");
let directory_name = "Cpp";


fs.readdir(__dirname, (err, data)=> {
    for (var i = 0; i < data.length; i++) {
        if (data[i].endsWith(".mp4")) {
            rename(data[i], i)
        }
    }

})

function rename(name, index) {
    if (index < 10) {
        index = "0"+index
    }
    index = index+'.txt'
    fs.rename(name, index, (err)=> {
        if (err) {
            console.log(err)
        } else {
            console.log('Done.')
        }
    })
}