const accountId = 144553
let accountEmail = "himanshuharsora03@gmail.com"
var accountPassword = "123456"
accountCity = "Surat"
let accountState;

// without declaring let -> it shows undefined

// accountId = 2653 // not allowed - constant var redeclared

console.log(accountId); 

accountEmail = "h1@h2.com"
accountPassword = "64728"
accountCity = "Amreli"

/*
prefer not to use var
because of issues of block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// console.log(typeof(accountPassword));
// console.log(typeof(accountId));
