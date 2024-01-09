let questionList = JSON.parse(localStorage.getItem('questions'));

console.log(localStorage.getItem('questions'))


let questionIndex = 0;
let score = 0;
document.getElementById("question").innerHTML = questionList[questionIndex].ques;

let questionDisplay = document.getElementById("questionButtonDisplay");
let resultDisplay = document.getElementById("result");
let nextButton = document.getElementById("nextButton");
let optionButton = document.getElementById("optionButtons");
let scoreDiv = document.getElementById("score")


let ButtonNext = document.getElementById("next-btn")




questionDisplay.innerHTML = questionList.map((item, index) => {
    return `<div id="button${index + 1}" class="px-4 py-2 bg-blue-100 mx-2 rounded-2xl cursor-pointer" onclick="changeQuestionByIndex(${index})">${index + 1}</div>`;
  }).join('');

function displayQuestion() {
  document.getElementById("question").innerHTML = questionList[questionIndex].ques;
  document.getElementsByClassName("option")[0].innerHTML = questionList[questionIndex].options[0];
  document.getElementsByClassName("option")[1].innerHTML = questionList[questionIndex].options[1];
  document.getElementsByClassName("option")[2].innerHTML = questionList[questionIndex].options[2];
  document.getElementsByClassName("option")[3].innerHTML = questionList[questionIndex].options[3];
}

displayQuestion();

function selectedOption(data) {
  if (questionList[questionIndex].ans === questionList[questionIndex].options[data]) {
    //Right Answer
    console.log("Answer is Right");
    score++;
    document.getElementById("score").innerHTML = score;
    changeQuestion(1);
  } else {
    //Wrong Answer
    console.log("wrong Answer");
    changeQuestion(1);
  }
//   nextButton.disabled = false;
}

function changeQuestion(value) {
  //increment or decrement value
  questionIndex += value;
  if (questionIndex < questionList.length && questionIndex >= 0) {
    document.getElementById("question").innerHTML = questionList[questionIndex].ques;
    disableButton(questionIndex-1);
    displayQuestion();
    // nextButton.disabled = false;
  } else {
    document.getElementById("question").style.display = "none";
    questionDisplay.style.display = "none";
    optionButton.style.display = "none";
    scoreDiv.style.display = "none"
    ButtonNext.style.display = "none"
    resultDisplay.style.display = "block";
    resultDisplay.innerHTML = `<div class="w-full h-[80vh] flex justify-center items-center text-4xl cursor-pointer" onclick="reloadPage()">Your Score: ${score}</div>`;
    // nextButton.disabled = true;
}
}

function changeQuestionByIndex(index) {
    disableButton(questionIndex);
    questionIndex = index;
    document.getElementById("question").innerHTML = questionList[questionIndex].ques;
    displayQuestion();
    disableButton(index);
    // nextButton.disabled = false;
  }


  function disableButton(index) {
    const disableButton = document.getElementById(`button${index + 1}`);
    disableButton.setAttribute("disabled", true);
    disableButton.classList.add("cursor-not-allowed", "opacity-50");
    disableButton.style.pointerEvents = "none";
}

function reloadPage() {
    location.reload();
  }