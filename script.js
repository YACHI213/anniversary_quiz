const questions = [
  {
    question: "What was I wearing on our 2nd date?",
    answers: [
      "white tank top blue jacket",
      "white tank top black jacket",
      "white tank top white jacket",
      "white tank no jacket"
    ],
    correct: 3
  },
  {
    question: "Who do you love more?",
    answers: [
      "your bestfriend",
      "your girlfriend",
      "poker",
      "ronaldo"
    ],
    correct: 1
  },
  {
    question: "When are you buying me a coach?",
    answers: [
      "now",
      "right now",
      "like right right now",
      "breakup"
    ],
    correct: 2
  },
  {
    question: "What is my favourite food to eat?",
    answers: [
      "rajma chawal",
      "chole chawal",
      "smoothie bowl",
      "avocado toast"
    ],
    correct: 0
  },
  {
    question: "Which months start you are supposed to be in Surat?",
    answers: [
      "may",
      "jun",
      "july",
      "aug"
    ],
    correct: 3
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("quiz-screen").classList.add("active");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(btn, index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
  document.getElementById("progress").innerText =
    `Question ${currentQuestion + 1} / ${questions.length}`;
}

function selectAnswer(button, index) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");

  document.getElementById("score-text").innerText =
    `You got ${score}/${questions.length} ❤️`;

  let message = "";

  if (score === questions.length) {
    message = "how does it feel to win🥳";
  } else if (score >= 3) {
    message = "Not bad…😘";
  } else {
    message = "wow… this is actually concerning 😭";
  }

  document.getElementById("message").innerText = message;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("start-screen").classList.add("active");
}
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 2s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}
