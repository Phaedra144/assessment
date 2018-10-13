'use strict';

const submitButt = document.querySelector('#submit_button');
const resultPhar = document.querySelector('.result');

submitButt.addEventListener('click', (e) => {
  e.preventDefault();
  const fieldInputNum = document.querySelector('#input_number');

  const xhr = new XMLHttpRequest();
  xhr.open("POST", '/converter', true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () { //Call a function when the state changes.
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      resultPhar.textContent = JSON.parse(xhr.responseText).result;
    }
  }

  xhr.send(JSON.stringify({
    inputnumber: fieldInputNum.value
  }));

});
