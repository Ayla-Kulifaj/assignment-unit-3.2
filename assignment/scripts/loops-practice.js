console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
//PSEUDO CODE-you would need to change the conditon/paranater 4 to 6 so
 //that the loop goes up to 5 and stops there.
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
//PSEUDO CODE- you would need to change the initializer as to where the 
// loop statement starts.

console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
////PSEUDO CODE- 1. change the initializer to 2. make the condition go to
// 10 so that the loop ends there. & changing the increments i+=2 so that it
//is only even numbers in this loop.

console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<=10; i+=2) {
  console.log(i)
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
//PSEUDO CODE- change the initializer so that the loop will start at 5.
//make the condition stop the loop at 0 so (i>-1). Create a decrement so that
//5 goes to 0. (i--)
for (let i=5; i>-1; i--){
  console.log(i)
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
//PSEUDO CODE- Need to create a variable named star to go thru and grab each iteration of the list stars 
//and print that until it has gone thru each array element.

for (const star of stars) {
  console.log (star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
//PSEUDO CODE-- create an index variable/control variable to know which iteration you are on.
//make a condition that will continue going thru the list untill it is done and 
//"breaks" when it has gone thru every iteration. So as long as it is "True" that
// you are still in that array it will continue untill it is "false". (Making a condition)
//Make it so each array index or iteration it prints the item inside that and then 
//continues on one by one untill it has gone thru every iteration.
//
let i=0;
while (i<stars.length){
  console.log(stars[i]);
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
//PSUEDO CODE-- create a control variable. Create a condition for the loop 
//to know to only go 0-5 and make sure it breaks.As well as it only going up 
// 1 increment for each loop it makes.
console.log('count from 0 to 5');
let numbers=0;
while (numbers<=5){
  console.log(numbers);
  numbers++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
//PSUEDO CODE-- Write a control variable=10. Create a conditon for the loop 
// that 10 will continue going down untill it is equal to 5. AS well as make 
//sure there is a decrement to insure the loop is going down by 1.
console.log('count backwards from 10 to 5');
let backwardsNumbers=10;
while (backwardsNumbers>=5){
  console.log(backwardsNumbers);
  backwardsNumbers--;
}
