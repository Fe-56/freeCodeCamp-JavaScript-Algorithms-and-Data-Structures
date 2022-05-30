let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]$|^[a-z][a-z]+[0-9]*$|^[a-z][0-9]+[0-9]+$/i; // Change this line
// let userCheck = /^[a-z][a-z]$|^[a-z][a-z]+[0-9]*$/i; // Change this line
let result = userCheck.test(username);