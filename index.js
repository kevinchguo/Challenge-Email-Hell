const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  return emailFile.emails.reduce(function(prev, current) {
    //checks to see if theres a "key value" pair inside prev object
    if (!prev[current.email]) {
      //If doesnt exist in 'prev' then add the key value pair and set value to 1
      prev[current.email] = 1;
    } else {
      //else adds 1 to the value
      prev[current.email]++;
    }
    return prev;
  }, {});
}

console.log(countUniqueEmails(emailLog));
