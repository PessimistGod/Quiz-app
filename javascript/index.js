let questions = [
  {
    ques: "What is the capital of India?",
    ans: "Delhi",
    options: ["Bengaluru", "Delhi", "Hyderabad", "Chennai"],
  },
  {
    ques: "Which planet is known as the Red Planet?",
    ans: "Mars",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
  {
    ques: "What is the largest mammal on Earth?",
    ans: "Blue Whale",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    ques: "In which year did World War II end?",
    ans: "1945",
    options: ["1939", "1942", "1945", "1950"],
  },
  {
    ques: "Who wrote 'Romeo and Juliet'?",
    ans: "William Shakespeare",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "William Shakespeare",
      "Leo Tolstoy",
    ],
  },
];

let questionIndex = 0;
let score = 0;
document.getElementById("question").innerHTML = questions[questionIndex].ques;


function displayQuestion() {
    document.getElementById("question").innerHTML = questions[questionIndex].ques;
    document.getElementsByClassName("option")[0].innerHTML = questions[questionIndex].options[0];
    document.getElementsByClassName("option")[1].innerHTML = questions[questionIndex].options[1];
    document.getElementsByClassName("option")[2].innerHTML = questions[questionIndex].options[2];
    document.getElementsByClassName("option")[3].innerHTML = questions[questionIndex].options[3];
  }

  displayQuestion()

  function selectedOption(data){
    console.log(questions[questionIndex].ans)
    console.log(questions[questionIndex].options[data])
    console.log(data)
    console.log(questionIndex)

    if(questions[questionIndex].ans === questions[questionIndex].options[data]){
        console.log("Answer is Right")
        score++
        document.getElementById('score').innerHTML = score
        incrementQuestion(1)
    }else{
        console.log("wrong Answer")
        incrementQuestion(1)

    }
    
  }


// let nextBtn = document.getElementById("btn-next");

function incrementQuestion(value) {
  questionIndex += value;
  if (questionIndex < questions.length && questionIndex >= 0) {
    document.getElementById("question").innerHTML =
      questions[questionIndex].ques;
      displayQuestion()
  } else {
    questionIndex -= value;
    console.log("done");
  }
}
