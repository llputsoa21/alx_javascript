// Script times the function

exports.Lesego = function(x, theFunction) {
    while(x>0){
        theFunction();
        x--;
    }
};