import { words } from "./words";

function convertDateToIndex(e, a) {
  let s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.floor(t / 864e5);
}

let baseDate = new Date(2021, 5, 19, 0, 0, 0, 0);

function getIndex(todaysDate) {
  return convertDateToIndex(baseDate, todaysDate);
}

export function getSolution(today) {
  let a,
    s = getIndex(today);
  return (a = s % words.length), words[a];
}

let today = new Date();
let yesterday = new Date().setDate(today.getDate() - 1);
let tomorrow = new Date().setDate(today.getDate() + 1);

// Print the solution for each day of the entire year
// for (let i = 0; i < 309; i++) {
//   let date = new Date(today.getTime() + i * 864e5);
//   console.log(
//     `${date.getDate()}/${
//       date.getMonth() + 1
//     }/${date.getFullYear()} - ${getSolution(date)}`
//   );
// }
