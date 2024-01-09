let questions = JSON.parse(localStorage.getItem('questions')) || [];

// Display questions
function displayQuestions() {
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = "";

    questions.forEach((question, index) => {
        const questionItem = `<div class="flex justify-between my-4"><div>${question.ques} </div><div class="cursor-pointer bg-red-500 text-white p-2 rounded-md"  onclick="deleteQuestion(${index})">Delete</div></div>`

        questionList.innerHTML += questionItem;

    });
}

// Delete a question
function deleteQuestion(index) {
    if (confirm('Are you sure you want to delete this question?')) {
        questions.splice(index, 1);
        localStorage.setItem('questions', JSON.stringify(questions));
        displayQuestions();
    }
}

displayQuestions();