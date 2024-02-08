console.log ('Start of the execution queue');

setTimeout(function () {
    console.log ('Final code block to eb executed')
    }, 0);

    for (let count = 1; count <= 100; count++) {
        console.log (count);
    }

    console.log ('End of the loop printing');