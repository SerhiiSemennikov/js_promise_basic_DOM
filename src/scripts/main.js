'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve();
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer2(error);
  },
);

promise2.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer2(error);
  },
);

function myDisplayer() {
  const div = document.createElement('div');

  div.classList.add('message');

  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
}

setTimeout(myDisplayer2, 3000);

function myDisplayer2() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');

  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
}
