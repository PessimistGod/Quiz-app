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
  

  try {
    let storedQuestions = JSON.parse(localStorage.getItem('questions'));
    // Check if questions are already stored in localStorage
    if (!storedQuestions) {
        localStorage.setItem('questions', JSON.stringify(questions));
    }
} catch (error) {
    console.log(error);
    console.error('Clearing the entire localStorage due to an unexpected error.');
    localStorage.clear();
}


function handleSubmit(event) {
    event.preventDefault();
    const { question, first, second, third, fourth, answer } = handleFormValue(event);

    if (validateForm(question, first, second, third, fourth, answer)) {
        let currentData = JSON.parse(localStorage.getItem('questions'))
        const index = answer - 1;
        const answerValue = [first, second, third, fourth][index];

        const updatedData = [...currentData,{ques:question,ans:answerValue ,options:[first,second,third,fourth]}]
        localStorage.setItem('questions', JSON.stringify(updatedData))
        resetForm(event.target);
    } else {
        alert("Please fill in all fields and provide a valid answer between 1 and 4.");
    }
}


function handleFormValue(event) {
    return {
        question: event.target.question.value,
        first: event.target.first.value,
        second: event.target.second.value,
        third: event.target.third.value,
        fourth: event.target.fourth.value,
        answer: event.target.answer.value,
    };
}

function validateForm(question, first, second, third, fourth, answer) {
    return (
        question.trim().length > 0 &&
        first.trim().length > 0 &&
        second.trim().length > 0 &&
        third.trim().length > 0 &&
        fourth.trim().length > 0 &&
        answer >= 1 && answer <= 4
    );
}

function resetForm(form) {
    form.reset();
}