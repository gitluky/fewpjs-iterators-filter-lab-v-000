// Code your solution here
function findMatching(arr, name) {
  return arr.filter(x => x.toUpperCase() === name.toUpperCase());
}