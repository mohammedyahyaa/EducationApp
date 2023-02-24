const surveys = [
  {
    title: "Survey 1",
    questions: [
      "Question 1",
      "Question 2",
      "Question 3"
    ]
  },
  {
    title: "Survey 2",
    questions: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4"
    ]
  },
  {
    title: "Survey 3",
    questions: [
      "Question 1",
      "Question 2"
    ]
  }
];

function showSurvey(index) {
  const survey = surveys[index];
  const surveyTitle = document.getElementById("survey-title");
  const questionList = document.getElementById("question-list");
  surveyTitle.innerText = survey.title;
  questionList.innerHTML = "";
  survey.questions.forEach(question => {
    const li = document.createElement("li");
    li.innerText = question;
    questionList.appendChild(li);
  });
  document.getElementById("surveys").style.display = "none";
  document.getElementById("questions").style.display = "block";
}
