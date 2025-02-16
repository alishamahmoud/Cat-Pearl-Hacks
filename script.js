const questions = [
  { 
      question: "How are you feline today?", 
      choices: {"Happy": {next: 1, mood: "Purring with Joy"}, "Sad": {next: 1, mood: "Feline Blue"}, "Hyper": {next: 1, mood: "Zoomies Mode"}, "Lazy": {next: 1, mood: "Curled Up Cozy"}, "Stressed": {next: 1, mood: "At your tail's end"}, "Angry": {next: 1, mood: "Fur-ocious"}, "Mischievous": {next: 1, mood: "A Tail of Trouble"}} 
  },
  { 
      question: "What's one word you would use to describe yourself?", 
      choices: {"Aggressive": {next: 2, mood: "Fur-ocious"}, "Radiant": {next: 2, mood: "Purring with Joy"}, "Playful": {next: 2, mood: "A Tail of Trouble"}, "Pessimistic": {next: 2, mood: "Feline Blue"}, "Active": {next: 2, mood: "Zoomies Mode"}, "Content": {next: 2, mood: "Curled Up Cozy"}, "Anxious": {next: 2, mood: "At your tail's end"}} 
    },
    { 
      question: "Rate your day on a scale from 1 to 5", 
      choices: {"1": {next: 3, mood: "Feline Blue"}, "2": {next: 3}, "3": {next: 3}, "4": {next: 3}, "5":{next: 3, mood: "Purring with Joy"}}
  },
  { 
      question: "Have you been feeling stressed lately?", 
      choices: {"Yes": {next: 4, mood: "At your tail's end"}, "No": {next: 5}}
  },
  { 
      question: "What are some ways that you deal with stress?", 
      choices: {"Go for a Jog":{next: 5, mood: "Zoomies Mode"}, "Practicing Hobbies":{next: 5, mood: "A Tail of Trouble"}, "Meditation":{next: 5, mood: "Curled Up Cozy"}, "Spending time with friends":{next: 5, mood: "Purring with Joy"}, "Crying":{next: 5, mood: "Feline Blue"}, "I don't":{next: 5, mood: "At your tail's end"}, "Scream":{next: 5, mood: "Fur-ocious"}}
  },
  { 
      question: "What's something you're looking forward to this weekend?", 
      choices: {"Hanging out": {next: 6, mood: "Purring with Joy"}, "Sleeping in": {next: 6, mood: "Curled Up Cozy"}, "Playing video games": {next: 6, mood: "A Tail of Trouble"}, "Running a Marathon": {next: 6, mood: "Zoomies Mode"}, "Not talking to anyone": {next: 6, mood: "Fur-ocious"}, "Crying to a sad movie": {next: 6, mood: "Feline Blue"}, "Doing my homework": {next: 6, mood: "At your tail's end"}}
  },
  { 
      question: "What's something that never fails to cheer you up?", 
      choices: {"Going for a run": {next: 7, mood: "Zoomies Mode"}, "Watching your comfort show/movie": {next: 7, mood: "Feline Blue"}, "Laughing with a friend": {next: 7, mood: "Purring with Joy"}, "Scrolling in bed": {next: 7, mood: "Curled Up Cozy"}, "Seeing my schedule cleared": {next: 7, mood: "At your tail's end"}, "Playing a prank on someone": {next: 7, mood: "A Tail of Trouble"}, "Rage Rooms": {next: 7, mood: "Fur-ocious"}}
  },
  { 
      question: "What's something you're grateful for today?", 
      choices: {"Family": {next: 8}, "Friends": {next: 8}, "My Health": {next: 8}, "Pets": {next: 8}, "Being Alive": {next: 8}}
  },
  { 
      question: "What do you do to celebrate accomplishments?", 
      choices: {"Go out for a nice meal": {next: 9, mood: "Purring with Joy"}, "Party with friends": {next: 9, mood: "Zoomies Mode"}, "Buy something nice": {next: 9, mood: "A Tail of Trouble"}, "Laze on the couch": {next: 9, mood: "Curled Up Cozy"},"Go out for a drink": {next: 9, mood: "Feline Blue"}, "Wreck Something": {next: 9, mood: "Fur-ocious"}, "No time for celebration": {next: 9, mood: "At your tail's end"}}
  },
  { 
      question: "Choose a Superpower:", 
      choices: {"Super Strength": {next: 10, mood: "Zoomies Mode"}, "Mind-Reading": {next: 10, mood: "At your tail's end"}, "Invisibility": {next: 10, mood: "Feline Blue"}, "Flying": {next: 10, mood: "Purring with Joy"}, "Telekenesis": {next: 10, mood: "Fur-ocious"}, "Time Travel": {next: 10, mood: "A Tail of Trouble"}, "Teleportation": {next: 10, mood: "Curled Up Cozy"}}
  },
  { 
      question: "What do you think is your best trait?", 
      choices: {"Empathy": {next: 11, mood: "Feline Blue"}, "Optimism": {next: 11, mood: "Purring with Joy"}, "Resilience": {next: 11, mood: "Fur-ocious"}, "Reliable": {next: 11, mood: "At your tail's end"}, "Strong": {next: 11, mood: "Zoomies Mode"}, "Clever": {next: 11, mood: "A Tail of Trouble"}, "Tranquility": {next: 11, mood: "Curled Up Cozy"}}
  },
  { 
    question: "What's something you could improve about yourself?", 
    choices: {"Temper": {mood: "Fur-ocious"}, "Time Management": {mood: "Curled Up Cozy"}, "Communication": {mood: "Feline Blue"}, "Teamwork": {mood: "A Tail of Trouble"}, "Honesty": {mood: "Purring with Joy"}, "Empathy": {mood: "At your tail's end"}, "Bad Habits": {mood: "Zoomies Mode"}}
  }
];

const catGIFs = {
  "Purring with Joy": "https://media1.tenor.com/m/TQu4CQKq6CMAAAAC/saleh-jumping-saleh-the-cat.gif",
  "Feline Blue": "https://media.tenor.com/KiAJYTBLjL0AAAAi/fat-cat.gif",
  "In Zoomies Mode": "https://media.tenor.com/W17t-0M9_s8AAAAM/cat-spaz.gif",
  "Curled Up Cozy": "https://media.tenor.com/nXNHCwBK_M4AAAAM/lazy-cat.gif",
  "At your tail's end": "https://media1.tenor.com/m/6nBZUxXWS7IAAAAd/sad-dejected.gif",
  "Fur-ocious": "https://media1.tenor.com/m/iRNtCkXla7oAAAAC/cat-wiggle.gif",
  "A Tail of Trouble": "https://media.tenor.com/JWFEQcWcJyQAAAAM/happy-catto-cats.gif"
};

let currentQuestion = -1;
const totalQuestions = questions.length;
let moods = [];

function startTest() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  nextQuestion();
}
function updateProgressBar() {
  let progress = (currentQuestion / totalQuestions) * 100;
  document.getElementById("progress-bar").value = progress;
}

function nextQuestion() {
  if (currentQuestion >= 0) {
      let selected = document.querySelector('input[name="choice"]:checked');
      if (!selected) {
          alert("Please select an answer!");
          return;
      }
      let selectedValue = selected.value;
      let selectedChoice = questions[currentQuestion].choices[selectedValue];
      if (selectedChoice.mood) {
        moods.push(selectedChoice.mood);
      }
      currentQuestion = selectedChoice.next;
      if (currentQuestion === null || currentQuestion === undefined) {
        showResult();
        return;
      }
    } else {
        currentQuestion = 0;
    }
      
  let questionData = questions[currentQuestion];
  document.getElementById("question-text").innerText = questionData.question;

  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  for (let choice in questionData.choices) {
      let label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="choice" value="${choice}"> ${choice}`;
      choicesDiv.appendChild(label);
      choicesDiv.appendChild(document.createElement("br"));
  };

  document.getElementById("next-btn").style.display = "block";
  
  updateProgressBar();
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let moodCounts = {};
  moods.forEach(mood => {
      moodCounts[mood] = (moodCounts[mood] || 0) + 1;
  });

  let userMood = Object.keys(moodCounts).reduce((a, b) => 
    moodCounts[a] === moodCounts[b] ? (Math.random() < 0.5 ? a : b) : 
    (moodCounts[a] > moodCounts[b] ? a : b)
    );

  let gif = catGIFs[userMood] || "default-cat.gif";
  
  document.getElementById("result-gif").src = gif;
  document.getElementById("result-text").innerText = `You are ${userMood} today!`;



}

container.appendChild(star);

const funfacts = []
