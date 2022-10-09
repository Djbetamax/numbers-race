const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function shuffleArray(array) { // ! shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const div = document.querySelector('.resultContainer');
const p = document.createElement('p');
div.appendChild(p);
document.querySelector('.submitBtn').addEventListener('click', () => {
  const input = document.querySelector('.numberInput');

  shuffleArray(nums);

  function resultRace (gold, silver, bronze, ...everyoneElse) {
    gold = nums[0];
    silver = nums[1];
    bronze = nums[2];

    p.innerHTML = `The number <span class="gold">${gold}</span> was the first to cross the finish line.<br> The number <span class="silver">${silver}</span> was the second to cross the git statfinish line.<br> The number <span class="bronze">${bronze}</span> was the third to cross the finish line.`
    }

  if (input.value >= 1 && input.value <= 12) {
    resultRace(...nums);
  } else {
      alert('The number needs to be between 1 and 12!');
  }
  input.value = ''
});