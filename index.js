// asynchronous javaScript, for functions or operations that we do not know how long they will take
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error("Promise Failed")), 1000);
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Done"));

//as one line is excecuted, the other is already been run
// setTimeout
// addEventListener

// promises are used to deal with async code

//States of a promise
//pending - default
//fulfiled
//rejected

//console.error this is to getbetter formatingwhen consolelogging out an error

// promise returns an object, and you can access various methods like .then, and .catch, .then is what is called when the resolve methodis invoked and .catch when the reject method is invoked

const geoPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position);
    },
    (error) => reject(error)
  );
});

geoPromise
  .then((value) => console.log(value))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done"));
