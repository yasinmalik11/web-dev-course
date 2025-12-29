// let student={
//     Name:"Yaseen",
//    Class:{
//     Class:9,
//     RollNo:34,
//     Section:"D"

//    },
//     Addrees:{
//         zip:34820934093,
//         aaa:"faklsld"
//     }
// }
// console.log(student.Class );
// function fun(a,b,...z) {
//     console.log(6000+4-3284+398439*90420938403);
    
// }
// fun()
// setInterval 
// ,clearInterval

//  let count = 0;

// // Function to increment and display the count
// function incrementCounter() {
//   count++;
//   console.log(Count: ${count});
// }

// // // Set interval to call incrementCounter every 1000ms (1 second)
// const intervalId = setInterval(incrementCounter, 1000);

// // // Stop the counter after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('Counter stopped');
// }, 10000);



function countdown() {
  if (coun === 0) {
    console.log("Done!");
    return;
  }
  console.log(coun);
  coun--;
  setTimeout(countdown, 1000);
}
countdown();

// Show reminder after 5 seconds


// Show reminder after 5 seconds
const reminder = setTimeout(() => {
  console.log("Time to drink water!");
//   alert("Time to drink water!");
}, 5000);

// setTimeout(() => {
//   // console.log(student.Class );
// //    function fun(a,b,...z) {
// //     console.log(6000+4-3284+398439*90420938403);
    
// // }
// // fun()
// // setInterval 
// // ,clearInterval
// }, 5000);
