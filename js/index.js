function reveal() {
    var answer = document.querySelector("#ans");
    answer.classList.toggle("blur");
  }
  
  function next(nextQuestion) {
    var question = document.querySelector("#cardContiner");
    question.innerHTML = "";
  
    var cardDiv = document.createElement("div");
  
    cardDiv.classList.add("card", "animate__animated", "animate__backInRight");
  
    cardDiv.innerHTML = `<div class="header center">
  <div class="question">
    <h1>O que é ${nextQuestion.title}?</h1>
  </div>
  </div>
  <div id="ans" class="answer blur">
  <p>
    ${nextQuestion.description}
  </p>`;
  
    question.appendChild(cardDiv);
  }
  
  function searchCard() {
    fetch("https://flash.quickstaart.com/random")
      .then(function (result) {
        return result.json();
      })
      .then(function (resultJson) {
        next(resultJson);
      });
  }
  
  window.addEventListener("load", searchCard);
  