# Broken App Issues
The code does not wait for all the promises to resolve before sending the response.
The 'map' method is called on the array of promises, which means that the 'out' array will contain promises instead of the actual data.
The 'axios.get' method returns a promise that resolves to an object with a 'data' property. The code is trying to access the 'data' property directly, which will result in an error.