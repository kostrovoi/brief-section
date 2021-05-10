const stepList = Array.from(document.querySelectorAll('.stepList'));
const navItems = Array.from(document.querySelectorAll('.navItem'));
const navUl = document.querySelector('.nav-list');
const stepsCount = document.querySelectorAll('.stepsCount');
const navItemChecked = document.querySelectorAll('svg.navItemChecked');
const progress = document.querySelector('.progress');
const submit = document.querySelector('button.submit');
const form = document.forms.form;

let username = form.elements.username;
let phoneNumber = form.elements.phoneNumber;
let currentIndx = 0;
let currentUl;
let currentNavItem;
let orderHistory = [];
let order = [];
let choice = {};

function createObject(key, value) {
  choice[key] = value;
}

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

  console.log(currentIndx);
  let choiceValue = currentLi.getAttribute('data-type');
  let choiceKey = `step${currentIndx}`;
  // let choice = {};
  // choice[choiceKey] = choiceValue;

createObject(choiceKey, choiceValue);
console.log(choice);

// console.log(Object.keys(choice));
// console.log(choice[choiceKey]);

  orderHistory.push(choice);
  console.log(orderHistory);

  order.push(choice);
  console.log(order);
  // delete objectName.keyName

  currentIndx--;
  if (navItems[currentIndx].previousElementSibling == null) {
    return;
  } else {
    navItems[currentIndx].previousElementSibling.classList.remove('stepBack');
  }
});

navUl.addEventListener('click', function (event) {
  currentNavItem = event.target.closest('li.navItem');
  if (currentNavItem == null) return;

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

  // function deleteLastObj() {
  // order.pop();
  // }
  // deleteLastObj();
  console.log(order[currentNavIndex]);
  console.log(currentNavIndex);
  // let popped = order.pop();
  order.pop();
  // console.log(popped);
  console.log(order);

    if (navItems[currentNavIndex].previousElementSibling == null) return;
    navItems[currentNavIndex].previousElementSibling.classList.add('stepBack');
  } else {
    return console.log('non-active-link');
  }
});

submit.addEventListener('click', function(e) {
  const button = e.currentTarget;

  localStorage.setItem('order', JSON.stringify(order));
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

  console.log(localStorage.getItem('order'));
  // , JSON.parse(order)
  console.log(localStorage.getItem('orderHistory'));
  // , JSON.parse(orderHistory)
});

username.addEventListener('change', function () {
  console.log(username.value);
  let usernameKey = 'username';
  let usernameValue = username.value;
  createObject(usernameKey, usernameValue);
  orderHistory.push(choice);
  order.push(choice);
});

phoneNumber.addEventListener('change', function () {
  console.log(phoneNumber.value);
  let phoneNumberKey = 'phoneNumber';
  let phoneNumberValue = phoneNumber.value;
  createObject(phoneNumberKey, phoneNumberValue);
  orderHistory.push(choice);
  order.push(choice);
});