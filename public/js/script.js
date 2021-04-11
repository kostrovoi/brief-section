let cardsAllSteps = document.querySelectorAll('.brief-list__item');
let stepList = document.querySelectorAll('.step-one-list');
let form = document.querySelector('.form');
let navItems = document.querySelectorAll('.navItem');
let navItemChecked = document.querySelectorAll('svg.navItemChecked');
let stepsCount = document.querySelectorAll('.stepsCount');
let progress = document.querySelector('.progress');

console.dir(cardsAllSteps);
console.dir(stepList);
console.dir(form);
console.dir(navItems);
console.dir(navItemChecked);
console.dir(stepsCount);

let step = 1;
stepsCount.forEach((count) => (count.innerHTML = step));

form.style.display = 'none';
// form not belong to stepList

cardsAllSteps.forEach((card) => (card.style.display = 'none'));

let firstList = Array.from(stepList[0].children);
firstList.forEach((card) => (card.style.display = 'block'));

let secondList = Array.from(stepList[1].children);
let thirdList = Array.from(stepList[2].children);
let fourthList = Array.from(stepList[3].children);

firstList.forEach((card) => {
  card.addEventListener('click', () => {
    // let indexStepList = 0;
    step++;
    stepsCount.forEach((count) => (count.innerHTML = step));
    progress.style.width = `${(100 * step) / 5}%`;
    console.log(progress.style.width);

    stepList[0].style.display = 'none';
    secondList.forEach((card) => (card.style.display = 'block'));
    navItems[0].classList.add('stepBack');
    navItems[1].classList.add('subtitle--active');
    navItemChecked[0].classList.add('checked-visible');
  });
});

console.log(firstList);
console.log(stepList[0]);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    if (navItem.classList.contains('stepBack')) {
      step--;
      stepsCount.forEach((count) => (count.innerHTML = step));
      progress.style.width = `${(100 * step) / 5}%`;

      console.log(progress.style.width);

      stepList[0].style.display = 'inherit';
      secondList.forEach((card) => (card.style.display = 'none'));
      navItems[0].classList.remove('stepBack');
      navItems[1].classList.remove('subtitle--active');
      navItemChecked[0].classList.remove('checked-visible');
    } else navItem;
  });
});
