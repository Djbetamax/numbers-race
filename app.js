const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffleArray(nums);

function raceNum (gold, silver, bronze, ...everyoneElse) {
  gold = nums[0];
  silver = nums[1];
  bronze = nums[2];
  console.log(gold, silver, bronze, everyoneElse);
}
raceNum(...nums)


// console.log(nums.sort((a,b) => 0.25 - Math.random()));