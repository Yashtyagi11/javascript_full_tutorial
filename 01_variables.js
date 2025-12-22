const accountId = 123456
let accountEmail = "yash@gmail.com"
var accountPassword = "1223344"
accountCity = "New York"
let accountState;  //undefined

//accountId = 654321     //Not allowed

accountEmail = "yt@gmail.com"
accountPassword = "abcd1234"
accountCity = "Los Angeles"

console.log(accountId);

/*
 Prefer not to use var for variable declaration because of its block and functional scope issues
 Use const by default
 Use let if the variable value needs to be changed
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
