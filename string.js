var s = `this java script code is an example for string methods`;
var s2=" this sentence concatinate"
//this converts all the words to lowercase
console.log("toLowerCase() method");
console.log(s.toLowerCase());
//this method converts all the methods to upper case
console.log("toUpperCase() method");
console.log(s.toUpperCase());
// this method returns the chrrecter at the specified index
console.log("charAt() method");
console.log(s.charAt(11));
//this method returens the starting index of the word
console.log("indexOf() method");
console.log(s.indexOf('java'));
//tthis method used to conctinate one string with another
console.log("concat() method");
console.log(s.concat(s2));
//this method replace the soure to the destination word
console.log("replace() method");
console.log(s.replace('script','programming'));
//this method take the subpart of the string
console.log("substring() method");
console.log(s.substr(4,3));