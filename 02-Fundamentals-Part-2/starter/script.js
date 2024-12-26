"use strict";

console.log("hello, world");

const calcAge = function (birthYeah) {
  return 2050 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years😊`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, "John"));

const twoSun = (nums, target) => {
  let resulet = [];
  const map = new Map();
  map.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      resulet = [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return resulet;
};

console.log(twoSun([2, 7, 11, 15], 17));

const groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};
