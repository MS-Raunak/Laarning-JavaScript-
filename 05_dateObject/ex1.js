let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());

let myDate2 = new Date(2023, 0, 12);
console.log(myDate2); // Thu Jan 12 2023 00:00:00 GMT+0530 (India Standard Time)

// In JS month always start with 0
myDate2 = new Date("01-14-2023");
console.log(myDate2);
