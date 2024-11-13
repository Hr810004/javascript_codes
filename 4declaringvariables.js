const accountId = 810004
let accountEmail = "hr810004@gmail.com" 
var accpass = "harsh810"
acccity = "Bharuch"

//optional semi colon
let accountstate;

//not allowed in const keywords assignment
// accountId = 8102004;

//usually try to use let keyword
accountEmail = "harsh.rce810@gmail.com" 
console.log(accountEmail);

//usually try not to use var keyword 
accpass = "8harsh10"

// if you want to print multiple things together in table format then use table instead of log
console.table([accountEmail,accountId,accpass,accountstate])