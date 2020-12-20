const fs = require("fs");
let directory_name = "Cpp";


fs.readdir(__dirname, (err, data)=> {
    for (var i = 0; i < data.length; i++) {
        if (data[i].endsWith(".txt")){
            rename(data[i],i)
        }
    }
      
})

function rename(name,index) {
    if (index<=9) {
        index=".0"+index
    }else{
        index="."+index
    }
    index=index+'.mp4'
fs.rename(name,index,(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log('Done.')
    }
})
}
