const stepList = Array.from(document.querySelectorAll('.stepList'));
const navItems = Array.from(document.querySelectorAll('.navItem'));
const navUl = document.querySelector('.nav-list');
const stepsCount = document.querySelectorAll('.stepsCount');
const navItemChecked = document.querySelectorAll('svg.navItemChecked');
const progress = document.querySelector('.progress');

let currentIndx = 0;
let currentUl;
let currentNavItem;

let step = 1;
stepsCount.forEach((count) => (count.innerHTML = step));

stepList.forEach((list) => (list.style.display = 'none'));
stepList[0].style.display = '';

document.addEventListener('click', function (event) {
  currentLi = event.target.closest('li.brief-list__item');

  if (currentLi == null) return;
  currentUl = currentLi.parentNode;
  console.log(Number(currentUl.dataset.index));
  currentIndx = Number(currentUl.dataset.index);
  stepList[currentIndx].style.display = 'none';
  stepList[currentIndx].nextElementSibling.style.display = '';

  navItems[currentIndx].classList.add('stepBack');
  navItemChecked[currentIndx].classList.add('checked-visible');

  currentIndx++;
  navItems[currentIndx].classList.add('subtitle--active');
  stepsCount.forEach((count) => (count.innerHTML = currentIndx + 1));
  progress.style.width = `${(100 * (currentIndx + 1)) / 5}%`;
  console.log(progress.style.width);

  currentIndx--;
  if (navItems[currentIndx].previousElementSibling == null) {
    return;
  } else {
    navItems[currentIndx].previousElementSibling.classList.remove('stepBack');
  }
});

navUl.addEventListener('click', function (event) {
  currentNavItem = event.target.closest('li.navItem');

  if (currentNavItem.classList.contains('stepBack')) {
    let currentNavIndex = navItems.indexOf(currentNavItem);
    console.log('stepBack', currentNavIndex);

    currentNavIndex++;
    stepList[currentNavIndex].style.display = 'none';
    stepList[currentNavIndex].previousElementSibling.style.display = '';
    navItems[currentNavIndex].classList.remove('subtitle--active');

    stepsCount.forEach((count) => (count.innerHTML = currentNavIndex));
    progress.style.width = `${(100 * currentNavIndex) / 5}%`;
    console.log(progress.style.width);

    currentNavIndex--;
    navItemChecked[currentNavIndex].classList.remove('checked-visible');
    navItems[currentNavIndex].classList.remove('stepBack');

    if (navItems[currentNavIndex].previousElementSibling == null) return;
    navItems[currentNavIndex].previousElementSibling.classList.add('stepBack');
  } else {
    return console.log('non-active-link');
  }
});