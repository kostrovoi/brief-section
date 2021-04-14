let cardsAllSteps = document.querySelectorAll('.brief-list__item');
let stepList = Array.from(document.querySelectorAll('.stepList'));
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


stepList.forEach((stepWrapper) => (stepWrapper.style.display = 'none'));
stepList[0].style.display = '';

let firstList = Array.from(stepList[0].children);
let secondList = Array.from(stepList[1].children);
let thirdList = Array.from(stepList[2].children);
let fourthList = Array.from(stepList[3].children);
let fifthList = Array.from(stepList[4].children);

console.log(firstList);
console.log(stepList[0]);

// firstList.forEach((card) => {
//   card.addEventListener('click', () => {
//     step++;
//     stepsCount.forEach((count) => (count.innerHTML = step));
//     progress.style.width = `${(100 * step) / 5}%`;
//     console.log(progress.style.width);

//     stepList[0].style.display = 'none';
//     stepList[1].style.display = '';
//     navItems[0].classList.add('stepBack');
//     navItems[1].classList.add('subtitle--active');
//     navItemChecked[0].classList.add('checked-visible');
//   });
// });

let indexStepList = 0;
let indexNavItem = 0;

stepList.forEach(list => {
  if (list.classList.contains('.stepForward')) {
    indexStepList = valueOf(indexOf(list));
    console.log(valueOf(indexOf(list)))
  } else indexStepList = 0;
});

Array.from(stepList[indexStepList].children).forEach((card) => {
  card.addEventListener('click', () => {
    step++;
    // if (step  === (stepList.length - 1)) {do step over, do not stepList[indexStepList + 1] }

    stepsCount.forEach((count) => (count.innerHTML = step));
    progress.style.width = `${(100 * step) / 5}%`;
    console.log(progress.style.width);

    stepList[indexStepList].style.display = 'none';
    indexStepList++;
    // console.log('I need a new one indexStepList', indexStepList);

    stepList[indexStepList].style.display = '';
    stepList[indexStepList].classList.add('stepForward');

    console.log(indexStepList + 1 === stepList.length - 1); // last step

    navItems[indexNavItem].classList.add('stepBack');
    navItemChecked[indexNavItem].classList.add('checked-visible');
    indexNavItem++;
    navItems[indexNavItem].classList.add('subtitle--active');

    console.log(indexStepList);
  });
});

console.log('I need a new one indexStepList', indexStepList);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    if (navItem.classList.contains('stepBack')) {
      step--;
      stepsCount.forEach((count) => (count.innerHTML = step));
      progress.style.width = `${(100 * step) / 5}%`;

      console.log(progress.style.width);

      stepList[indexStepList].style.display = 'none';
      stepList[indexStepList].classList.remove('stepForward');
      indexStepList--;
      stepList[indexStepList].style.display = '';
      navItems[indexNavItem].classList.remove('subtitle--active');
      indexNavItem--;
      navItems[indexNavItem].classList.remove('stepBack');
      navItemChecked[indexNavItem].classList.remove('checked-visible');

      console.log(indexStepList, indexNavItem);
    } else navItem;
  });
});
