const fs = require('fs');
fs.readFile('test.txt', function(err, data) {
    let input = data.toString();
    let inpArr = input.split(' ');
    var counter = 0;
    for(var i = 0; i < inpArr.length; i++) {
        if (inpArr[i].includes('@softwire.com'))
        { 
            
            counter = counter + 1 ;
        }
    }
    console.log(counter);
});