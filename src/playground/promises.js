// Promises can only be resolved or rejected ONCE. Resolve/reject can only take one argument ex. string, object.
// Catch fires if a function rejects.
// Then can take a second argument, which will be treated as catch handler.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong');
    // resolve({
    //   name: 'Megan',
    //   age: 24
    // });
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');