let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

let hello = [];
for (let index = 0; index < myArray.length; index++) {
    let element = myArray[index];
  //  console.log(typeof(myArray[index]));
    // MAGIC HAPPENS HERE
    if (typeof myArray[index] === 'object') {
      
        hello.push(element);
    }

}

console.log(hello)