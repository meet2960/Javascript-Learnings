const promiseOne = new Promise(function (resolve, reject) {
  // Do Async Task
  // DB Calls, API Calls, Cryptography Calls,
  setTimeout(() => {
    console.log("Async Task 1 is complete");
    resolve();
  }, 1000);
});
// .then has direct connection with resolve of promise, it gives us a callback, means a function which automatically receives a argument of the task performed inside the promise.
// We have to add resolve() if our task is completed successfully
promiseOne.then(() => {
  console.log("Promise Consumed 1");
});

// * 2nd Promise
// ? Without using any variable to create a promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("\nAsync Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 Resolved");
});

// * 3rd Promise
// ? Usage of resolve()
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "javascript", email: "example@gmail.com" }); // this will be automatically accessed inside .then() method of promise
  }, 1000);
});
promiseThree.then((data) => {
  console.log("\ndata from promiseThree", data, "\n");
});

// * 4th Promise
// ? Chaining of .then and also .catch and .finally
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "meet", password: "123" });
    } else {
      reject("Error Something Went Wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log("user", user);
    return user.username;
  })
  .then((username) => {
    console.log("username", username);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("The promised is either resolved or rejected\n");
  });

// * 5th Promise
// ? Using asumasync/await to complete the promise
// ? If any promise is designed which can throw an error, and if we are consuming that promise with the help of async/await, then we have to use try catch block in async/await function compulsory
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error: JS Went Wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("response", response);
  } catch (error) {
    console.log("Error in Promise Five", error);
  }
}
consumePromiseFive();

// * Fetch API Example
// Creating a API Request with async/await and core promises
// ? Using async/await
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log("data", data);
//   } catch (error) {
//     console.log("Error While fetching", error);
//   }
// }

// getAllUsers();

// ? Using Promises
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("Response", response);
    return response.json();
  })
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error While Calling APi in Promise");
  });
