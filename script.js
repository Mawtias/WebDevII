const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'In which continent is Brazil locacted?',
    answers: [
      { text: 'Africa', correct: false },
      { text: 'Americas', correct: true },
      { text: 'Oceania', correct: false },
      { text: 'Europe', correct: false },
    ]
  },
  {
    question: 'What is the language spoken in Brazil?',
    answers: [
      { text: 'Spanish', correct: false },
      { text: 'French', correct: false },
      { text: 'Portuguese', correct: true },
      { text: 'Brazilian', correct: false }
    ]
  },
  {
    question: 'What is the capital of Brazil?',
    answers: [
      { text: 'Rio de Janeiro', correct: false },
      { text: 'São Paulo', correct: false },
      { text: 'Copacabana', correct: false },
      { text: 'Brasilia', correct: true }
    ]
  },
  {
    question: 'How many states are there in Brazil? (including the Federal District)',
    answers: [
      { text: '153 million', correct: false },
      { text: '98 million', correct: false },
      { text: '264 million', correct: false },
      { text: '212 million', correct: true }
    ]
  },
  {
    question: 'What is the most famous sport in Brazil?',
    answers: [
      { text: 'Volleyball', correct: false },
      { text: 'Handball', correct: false },
      { text: 'Soccer', correct: true },
      { text: 'Hockey', correct: false }
    ]
  },
  {
    question: 'How old is the brazilian republic? (since the independence)',
    answers: [
      { text: '301 y.o.', correct: false },
      { text: '200 y.o.', correct: true },
      { text: '167 y.o.', correct: false },
      { text: '88 y.o.', correct: false }
    ]
  },
  {
    question: 'When was Brazil found by Portugal?',
    answers: [
      { text: '1872', correct: false },
      { text: '1500', correct: true },
      { text: '1378', correct: false },
      { text: '1743', correct: false }
    ]
  },
  {
    question: '______ is a worldwide famous brazilian music genre.',
    answers: [
      { text: 'Bossa Nova', correct: true },
      { text: 'Baby Metal', correct: false },
      { text: 'Rap', correct: false },
      { text: 'Funk', correct: false }
    ]
  },
  {
    question: 'How often do people in Brazil usually shower?',
    answers: [
      { text: 'Four times a week', correct: false },
      { text: 'Every two days', correct: false },
      { text: 'Once a week', correct: false },
      { text: 'Once a day', correct: true }
    ]
  },
  
  {
    question: 'How many regions does Brazil have?',
    answers: [
      { text: '8', correct: false },
      { text: '2', correct: false },
      { text: '5', correct: true },
      { text: '3', correct: false }
    ]
  },

  {
    question: 'Which country colonized Brazil?',
    answers: [
      { text: 'Portugal', correct: true },
      { text: 'France', correct: false },
      { text: 'Spain', correct: false },
      { text: 'Italy', correct: false }
    ]
  },
  {
    question: 'Which of the following is a a city in Brazil?',
    answers: [
      { text: 'Berlim', correct: false },
      { text: 'Fortaleza', correct: true },
      { text: 'Lagos', correct: false },
      { text: 'Lisboa', correct: false }
    ]
  },
  {
    question: 'In Brazil there are _____ time zones',
    answers: [
      { text: '4', correct: true },
      { text: '3', correct: false },
      { text: '2', correct: false },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'Which of the following is a typical brazilian food?',
    answers: [
      { text: 'Poutine', correct: false },
      { text: 'Lasagna', correct: false },
      { text: 'Brigadeiro', correct: true },
      { text: 'Kimchi', correct: false }
    ]
  },
  {
    question: 'Brazil has in its territory one of of the most famous forests in the world. It is the ______',
    answers: [
      { text: 'Ticaracatica forest', correct: false },
      { text: 'Dark forest', correct: false },
      { text: 'Taiga forest', correct: false },
      { text: 'Amazon forest', correct: true }
    ]
  },
  {
    question: 'Which of these animals can be found in Brazil?',
    answers: [
      { text: 'Gorilla', correct: false },
      { text: 'Lion', correct: false },
      { text: 'Capybara', correct: true },
      { text: 'Rhino', correct: false }
    ]
  },
  {
    question: 'Which of these famous people is not brazilian?',
    answers: [
      { text: 'Rodrigo Santoro', correct: false },
      { text: 'Carmen Miranda', correct: true },
      { text: 'Giselle Bundchen', correct: false },
      { text: 'Anitta', correct: false }
    ]
  }
]