const sports= ['hocky','football','skydying','racing','cricket'];

function iterate(item) {
  console.log(item);
}
//iterate throgh all the elements
sports.forEach(iterate);

console.log("isArray() method");
console.log(Array.isArray(sports));

console.log("includes() method");
console.log(sports.includes('vollyball'));

console.log("push() method");
console.log(sports.push('basketball'));

console.log("pop() method");
console.log(sports.pop());

console.log("Shift() method");
console.log(sports.shift());

console.log("UnShift() method");
console.log(sports.unshift('basketball'));

console.log("Splice() method");
sports.splice(1,0,'boxing');
console.log(sports);

console.log("Slice() method");
console.log(sports.slice(2,4));

console.log("Join() method");
console.log(sports.join());

console.log("IndexOf() method");
console.log(sports.indexOf('football',1));
console.log(sports.indexOf('racing'));

console.log("Map() method");
console.log(sports.map(x => x+'!'));

console.log("Filter() method");
console.log(sports.filter(word => word.length>5));