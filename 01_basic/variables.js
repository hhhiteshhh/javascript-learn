// const
const accountId = 144553
// let
let accountEmail = "hitesh@google.com"
// var
var accountPassword = "12345"
// still a valid variable
accountCity = "Jaipur"

let accountState;

// cannot redefine a const
// accountId = 2 // not allowed


// valid can redefine the values of let and var
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])