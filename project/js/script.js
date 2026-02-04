

const tips = [
  "Print 'Hello World' — celebrate it.",
  "Break problems into small steps.",
  "Journal every bug you fix.",
  "Teach one thing you learned each week."
];

const resources = [
  {name: "freeCodeCamp", url: "https://www.freecodecamp.org", type: "tutorials"},
  {name: "Stack Overflow", url: "https://stackoverflow.com", type: "community"},
  {name: "Local meetup", url: "#", type: "community"}
];

/* Utility: create HTML using template literals  */
function renderTip(index){
  // conditional branching: check index validity
  if (index < 0 || index >= tips.length){
    return `<p>No tip found.</p>`;
  }
  return `<p class="tip">💡 ${tips[index]}</p>`;
}

/* Function: show a random tip and save last shown in localStorage */
function showRandomTip(){
  const idx = Math.floor(Math.random()*tips.length);
  const output = document.getElementById('tip-output');
  if (output){
    output.innerHTML = renderTip(idx);
    localStorage.setItem('lastTipIndex', idx);
  }
}

/* Function: save user favorite tip to localStorage  */
function saveFavoriteTip(){
  const idx = localStorage.getItem('lastTipIndex');
  if (idx === null){
    alert('Show a tip first, then save it as a favorite.');
    return;
  }
  const favs = JSON.parse(localStorage.getItem('favorites') || "[]");
  // Prevent duplicates using array methods
  const exists = favs.some(i => i == idx);
  if (!exists){
    favs.push(idx);
    localStorage.setItem('favorites', JSON.stringify(favs));
    alert('Tip saved to favorites.');
    renderFavorites();
  } else {
    alert('This tip is already in favorites.');
  }
}

function renderExercisesAndFavorites(){
  const exEl = document.getElementById('exercises');
  if (exEl){
    // use array map to create list
    const exercises = [
      "Write and run 'Hello World' in the console.",
      "Create a loop that counts 1 to 5.",
      "Build a simple function that returns a string."
    ];
    exEl.innerHTML = `<ul>${exercises.map(e => `<li>${e}</li>`).join('')}</ul>`;
  }

  renderFavorites();
}

/* Render favorites using template literals and localStorage */
function renderFavorites(){
  const favEl = document.getElementById('favorites');
  if (!favEl) return;
  const favs = JSON.parse(localStorage.getItem('favorites') || "[]");
  if (favs.length === 0){
    favEl.innerHTML = `<p>No favorites saved yet. Save a tip on the home page.</p>`;
    return;
  }
  // build list
  favEl.innerHTML = `<ol>${favs.map(i => `<li>${tips[i]}</li>`).join('')}</ol>`;
}

/* Render resources on community page */
function renderResources(){
  const list = document.getElementById('resources-list');
  if (!list) return;
  list.innerHTML = resources.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.name}</a> — ${r.type}</li>`).join('');
}

/* Form handling with conditional validation and localStorage "contactDraft" autosave */
function setupForm(){
  const form = document.getElementById('contact-form');
  if (!form) return;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const result = document.getElementById('form-result');

  // restore draft if exists
  const draft = JSON.parse(localStorage.getItem('contactDraft') || "null");
  if (draft){
    name.value = draft.name || "";
    email.value = draft.email || "";
    message.value = draft.message || "";
  }

  // autosave when inputs change
  [name, email, message].forEach(el => {
    el.addEventListener('input', () => {
      const draftObj = {name: name.value, email: email.value, message: message.value};
      localStorage.setItem('contactDraft', JSON.stringify(draftObj));
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation using conditional branching
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()){
      result.textContent = "Please complete all fields.";
      result.style.color = "crimson";
      return;
    }
    
    result.textContent = `Thanks, ${name.value}. Your message has been recorded locally.`;
    result.style.color = "green";

    const subs = JSON.parse(localStorage.getItem('submissions') || "[]");
    subs.push({name: name.value, email: email.value, message: message.value, date: new Date().toISOString()});
    localStorage.setItem('submissions', JSON.stringify(subs));
    localStorage.removeItem('contactDraft');
    form.reset();
  });
}

/* Init: wire up buttons and page-specific renders */
document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('show-tip');
  const saveBtn = document.getElementById('save-preference');
  if (showBtn) showBtn.addEventListener('click', showRandomTip);
  if (saveBtn) saveBtn.addEventListener('click', saveFavoriteTip);

  // Page-specific initializers
  renderExercisesAndFavorites();
  renderResources();
  setupForm();

 
  const lastTip = localStorage.getItem('lastTipIndex');
  if (lastTip !== null){
    const out = document.getElementById('tip-output');
    if (out) out.innerHTML = renderTip(parseInt(lastTip));
  }
});
