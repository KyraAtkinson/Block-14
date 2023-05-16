// create a function
// create a new variable called with blank square brackets so we can create a new array
// use .slice on array to clone the given array
// create a for loop, use .length so the property knows the lenth of the array
// use .push and .pop to reverse the function. 


function reverArray(array) {
    var newArr = [],
        inArr = array.slice();   

    for(; inArr.length; ) {      
        newArr.push(inArr.pop());
    }
    return newArr;
}

console.log(reverArray([1, 2, 3,]));

console.log(reverArray([20, 50, 30, 60, 200]));

console.log(reverArray([1, 3, 5, 7, 9, 11]));

console.log(reverArray([1, -1, 2, -3, 5, -8, 13]));

