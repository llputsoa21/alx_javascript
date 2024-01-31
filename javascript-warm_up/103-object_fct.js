//update the script by adding a function that increments integer value

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        this.value += 1;
    }
};

//format the output for the first object
const firstObjectOutput = `{ type: '${myObject.type}', value: ${myObject.value} }`;

console.log(firstObjectOutput);

function displayObject(obj) {
    console.log(`{ type: '${obj.type}', value: ${obj.value}, incr: [Function] }`);
};

myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);