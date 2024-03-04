// // asynchronous javaScript, for functions or operations that we do not know how long they will take
// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => reject(Error("Promise Failed")), 1000);
// // });

// // promise
// //   .then((value) => console.log(value))
// //   .catch((error) => console.error(error))
// //   .finally(() => console.log("Done"));

// //as one line is excecuted, the other is already been run
// // setTimeout
// // addEventListener

// // promises are used to deal with async code

// //States of a promise
// //pending - default
// //fulfiled
// //rejected

// //console.error this is to getbetter formatingwhen consolelogging out an error

// // promise returns an object, and you can access various methods like .then, and .catch, .then is what is called when the resolve methodis invoked and .catch when the reject method is invoked

// const geoPromise = new Promise((resolve, reject) => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       resolve(position);
//     },
//     (error) => reject(error)
//   );
// });

// geoPromise
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Done"));

// // API - application programming nterface, helps software communictae with other software
// // REST API used to do CRUD operations on data- Representational State Transfer
// // Standard HTTP methods
// // Create POST
// // read GET
// // update PUT /PATCH
// // delete DELETE

// //JSON -Javascript Object Notation
// //fetch(url) - needs a url called an API endpoint

// // https://jsonplaceholder.typicode.com/ fake api for testing an prototyping

// fetch("https://jsonplaceholder.typicode.com/pots/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.error("Error:", error));

// // when using fetch for a POST request, you paass a second argument which is an object with the method, headers and body propersties

// const blogPost = {
//   title: "Cool post",
//   body: "lkajsdflkjasjlfda",
//   userId: 1,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(blogPost),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     } else {
//       response.json();
//     }
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(`name : ${data.name} , Company: ${data.company.name}`);
  })
  .catch((error) => console.log(error));
