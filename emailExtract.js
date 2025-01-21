const fs = require('fs');
function countEmailAddrWithoutRegExp(){
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

}
function countEmailAddrWithRegExp(){
    let matchLen = 0;
    fs.readFile('test.txt', function(err, data) {
         let input = data.toString();
        // let patternRegEx = /[A-Za-z0-9._]+@softwire.com/gi;
        let patternRegEx = /\w+@techswitch.co.uk/gi;       
        matchLen = input.match(patternRegEx).length;
         console.log(matchLen);
    });
    
}    
countEmailAddrWithRegExp();