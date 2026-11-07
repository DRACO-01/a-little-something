// Cloud Nine: a playful, pre-written response bot.
// Later we can add a secure server-side AI connection without exposing API keys.

const responseLibrary = {
  "shayari": [
    "Tumse baat ho jaaye toh din thoda better lagta hai. Is observation ko poetry keh lo, overthinking mat karna.",
    "Koi grand si baat nahi, bas tumhara naam screen pe aaye toh attention automatically idhar aa jaati hai.",
    "Na chaand chahiye, na filmi barsaat. Bas achhi conversation aur tumhara thoda sa time — kaafi hai.",
    "Tumhari vibe ka review likhna tha… words kam pad gaye. Thoda irritating talent hai, honestly.",
    "Kuch log yaad reh jaate hain bina koi effort kiye. Tum shayad usi category mein ho.",
    "Aaj ki chhoti si nazm: din normal tha, phir tumhara message aaya. Bas, plot improve ho gaya.",
    "Tum koi kahaani nahi jise perfect likhna pade; tum woh interesting page ho jise dobara padhne ka mann kare.",
    "Baaton mein tum ho, aur dimaag mein background music. Filmy nahi ho raha… bas halka sa."
  ],
  "roast": [
    "Tumhara 'I'm almost ready' sunke NASA bhi launch window postpone kar de. 😭",
    "Tum itni confidently galat ho jaati ho ki Google bhi apne results double-check karta hoga.",
    "Tumhare mood swings ke liye weather app nahi, full-time meteorology department chahiye.",
    "Tum 'ek last reel' bolti ho aur phir phone ki battery apni life choices reconsider karti hai.",
    "Tumhari decision-making dekh ke coin toss bhi bolta hoga: behen, mujhe beech mein mat la.",
    "Tumhara attention span itna unpredictable hai ki goldfish tumhe focus tips de sakti hai.",
    "Tum argument jeetne ke liye facts nahi, confidence aur eye contact use karti ho. Dangerous combination.",
    "Tum 'I'm not dramatic' bolke jis tarah dramatic pause leti ho… wah. Oscar committee ko tag karun?",
    "Tumhare plans itne flexible hain ki yoga instructor bhi impressed ho jaaye.",
    "Tumhari logic ko samajhne ke liye instruction manual nahi, archaeological excavation chahiye."
  ],
  "compliment": [
    "Tumhare saath normal si baat bhi boring nahi rehti. That's a genuinely underrated quality.",
    "You have a nice way of making people feel included without making a big deal out of it.",
    "Tumhari personality mein ek achha balance hai — thodi mischief, thodi warmth, aur kaafi character.",
    "Not to hype you up, but you do leave a good impression. Annoyingly memorable, actually.",
    "Tumhari smile achhi hai, obviously. But tumhara sense of humour is doing some serious competition.",
    "Some people try too hard to be interesting. Tum bas apni usual settings pe kaafi ho.",
    "A small appreciation break: tumse baat karke mood thoda better ho jaata hai. That's on you.",
    "You make being yourself look pretty effortless. Keep that."
  ],
  "surprise": [
    "Breaking news: tum officially aaj ki conversation ka most distracting notification ho. Details at 9. ☁️",
    "Tiny challenge: agle 10 seconds mein apne baare mein ek genuinely achhi baat socho. Haan, compliment accept karna bhi skill hai.",
    "Plot twist: roast button dabane aayi thi, compliment leke ja rahi ho. Character development.",
    "Random award: 'Most likely to say kuch nahi hua' while clearly something has happened. 🏆",
    "Aaj ka prediction: tum abhi smile karogi, phir pretend karogi ki nahi ki. I know, very scientific.",
    "Choose your side quest: send your funniest selfie, recommend one song, or admit that I'm occasionally funny.",
    "Secret achievement unlocked: made someone open this website and stay longer than 10 seconds. Pretty powerful.",
    "A reminder from the cloud department: paani piyo, shoulders relax karo, aur apne aap ko thoda credit do."
  ]
};

const chatWindow = document.getElementById("chatWindow");
const generateButton = document.getElementById("generateButton");
const modeButtons = [...document.querySelectorAll(".mode-button")];
let selectedMode = "shayari";
let lastResponse = "";

function addMessage(text, sender = "bot") {
  const message = document.createElement("div");
  message.className = `chat-message ${sender === "user" ? "user-message" : "bot-message"}`;

  const avatar = document.createElement("span");
  avatar.className = "message-avatar";
  avatar.textContent = sender === "user" ? "♡" : "☁";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  const paragraph = document.createElement("p");
  // textContent keeps messages as text instead of interpreting them as HTML.
  paragraph.textContent = text;
  bubble.appendChild(paragraph);
  message.append(avatar, bubble);
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

const lastResponses = {};

function chooseResponse(mode) {
  const choices = responseLibrary[mode];
  if (!choices || choices.length === 0) {
    return "Cloud department is out of ideas. Give us a minute. ☁️";
  }

  // Pick randomly, but don't repeat the previous line from this mode.
  const available = choices.filter((item) => item !== lastResponses[mode]);
  const response = available[Math.floor(Math.random() * available.length)];
  lastResponses[mode] = response;
  return response;
}

function updateButtonLabel() {
  const labels = {
    shayari: "Give me some shayari",
    roast: "Roast me (I dare you)",
    compliment: "I deserve a compliment",
    surprise: "Surprise me"
  };
  generateButton.innerHTML = `${labels[selectedMode]} <span>✦</span>`;
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateButtonLabel();
  });
});

generateButton.addEventListener("click", () => {
  const labels = {
    shayari: "🌷 Shayari",
    roast: "🔥 Roast me",
    compliment: "✨ Compliment me",
    surprise: "🎲 Surprise me"
  };
  addMessage(labels[selectedMode], "user");
  window.setTimeout(() => addMessage(chooseResponse(selectedMode)), 220);
});

document.getElementById("openLetter").addEventListener("click", () => {
  const letter = document.getElementById("letter");
  const button = document.getElementById("openLetter");
  letter.hidden = !letter.hidden;
  button.innerHTML = letter.hidden ? 'Open the note <span>♡</span>' : 'Close the note <span>×</span>';
  if (!letter.hidden) letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
