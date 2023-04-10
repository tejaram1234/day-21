// creating new promise with to perameters resolve and reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;  // logic for random number
    resolve(randomNum); 
    // here we call the resolve() function with the random number as its argument. 
    //This will fulfill the Promise and return the random number to any .then() method that is called on the Promise.
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});//Finally, we use the .then() method to handle the resolved value of the Promise.
//Inside the callback function passed to .then(), we log the resolved value  to the console.

//modified for using catch method
const getRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      if (randomNum > 5) {
        resolve(randomNum);
      } else {
        reject("Random number is less than or equal to 5");
      }
    }, 1000);
  });
  
  getRandomNumber.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
  