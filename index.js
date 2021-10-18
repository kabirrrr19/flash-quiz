console.log('Atul Mishra');

var readLineSync = require('readline-sync');
var score = 0;

var userName = readLineSync.question("What is your name? ");
console.log("Welcome Here " + userName + ". Do you know Atul?")

var userAnswerAge = readLineSync.question('Am i older than 20? ');
if (userAnswerAge === "yes") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  


var userAnswerCity = readLineSync.question("What is my age? ");
if (userAnswerCity === "20") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  

var userAnswerCity = readLineSync.question("Where is my Home town? ");
if (userAnswerCity === "varanasi") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  

var userAnswerCity = readLineSync.question("Where do i work? ");
if (userAnswerCity === "knowhere") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");
console.log();  
console.log("Your score : ", score);

console.log("Check out the high scores, if you should be there ping me and I'll update it....");
console.log("Atul : 4");
console.log("Kabir : 4");