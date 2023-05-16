// create a for loop stating i is equal to 1 and i is less than or equal to 100
// create an if/else statement
// create an if/else statement that says if the number is divided by 3 and there is no remainder return "Fizz". 
// else if if the number is divided by 5 and there is no remainder return "Buzz". 
// else if a number is divided by 15 and the remainder is 0 then the number is a multiple of both 3 & 5, in this case print "FizzBuzz".
// if the number isnt a multiple of any of the numbers print the original number. 


for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
    console.log("Fizz") 

    } else if (i % 5 == 0){
    console.log("Buzz")
    
    } else if (i % 15 == 0){
    console.log("FizzBuzz")

    } else console.log(i)  
}
