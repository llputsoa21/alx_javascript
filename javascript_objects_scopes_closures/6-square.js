//Square that inherits from the previous file
const Square1 = require('./5-square')

class Square extends Square1{
    charPrint(c){
        const char = c || 'X';
        for (let i = 0; i < this.height; i++) {
            console.log(char.repeat(this.width));
        };
    };
};
module.exports = Square;