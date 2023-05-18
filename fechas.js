const inputDate = "2023-12-31T10:37:07.5188991";

let date = new Date(inputDate);
date.setDate(date.getDate() + 1); //Add 1 day

let year = date.getFullYear();
let month = date.getMonth() + 1; //Returns the month (from 0-11)
month = String(month).padStart(2, "0");
let day = date.getDate();
day = String(day).padStart(2, "0");

const outputDateString = `${year}-${month}-${day}T23:59:59.999Z`;
const outputDate = new Date(outputDateString);

console.log(outputDate); // Mon Jan 01 2024 20:59:59 GMT-0300 (hora estándar de Argentina)
console.log(JSON.stringify(outputDate)); // "2024-01-01T23:59:59.999Z"
console.log(outputDate.toDateString()); // Mon Jan 01 2024 => Converts the date portion of a Date object into a readable string
console.log(outputDate.getFullYear()); // 2024 => Returns the year
console.log(outputDate.getMonth() + 1); // 1 => Returns the month (from 0-11)
console.log(outputDate.getDate()); // 1 => Returns the day of the month (from 1-31)