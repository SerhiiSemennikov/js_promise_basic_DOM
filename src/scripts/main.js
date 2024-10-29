'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise = new Promise((resolve, reject) => {
  resolve(myDisplayer);

  reject(myDisplayer2);
});

promise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer2(error);
  },
);

function myDisplayer() {
  logo.onclick = () => {
    const div = document.createElement('div');

    div.classList.add('message');

    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  };
}

setTimeout(myDisplayer2, 3000);

function myDisplayer2() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');

  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
}
