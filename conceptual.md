### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript? Through callbacks, promises, and async/await.

- What is a Promise? The represent a value that may not be available yet, and can be either resolved or rejected.

- What are the differences between an async function and a regular function? While a standard funciton does not support the 'await' keyword, an async function is a special type of function that is designed to work with promises and support the 'await' keyword to wait for a promise to resolve or reject before continuing to the next line of code.

- What is the difference between Node.js and Express.js? Node.js is a JavaScript runtime environment that allows developers to build server-side applications using JavaScript, while Express.js is a web application framework built on top of Node.js.

- What is the error-first callback pattern? It is a convention in Node.js where the first argument passed to a callback funciton is an error object. If the operation was successful, the error object is 'null' or 'undefined'. If the operation failed, the error object will contain information about the error.

- What is middleware? a function in JavaScript that has access to the request object, the response object, and the next middleware function in the application's request-response cycle. They can execute any code, make changes to the request and response objects, and end the request-response cycle or pass control to the next middleware function in the stack.

- What does the `next` function do? It is a callback function that is used to pass control to the next middleware function in the application's request-response cycle.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
the code makes three separate HTTP requests to the API, which can be inefficient. Would be better to make a single request to retrieve all the users at once. The code also doesn't handle any errors that might occur when making the HTTP requests. If any of the requests fail, the entire function will fail and the error will not be handled. The code is also hard-coded, which makes it not flexible.