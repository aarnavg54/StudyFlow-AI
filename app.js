// ===== DATE BADGE =====
(function () {
  const d = new Date();
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  document.getElementById('date-badge').textContent = d.toLocaleDateString('en-US', opts);
})();

// ===== SIDEBAR NAVIGATION =====
const sections = ['dashboard', 'flashcards', 'analytics', 'focus', 'settings'];

function setActive(btn, id) {
  // Highlight nav button
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show correct section
  sections.forEach(s => {
    const el = document.getElementById('section-' + s);
    if (el) el.classList.toggle('hidden', s !== id);
  });

  // Update page title
  const titles = {
    dashboard:  'Dashboard',
    flashcards: 'Flashcards',
    analytics:  'Analytics',
    focus:      'Focus',
    settings:   'Settings'
  };
  document.getElementById('page-title').textContent = titles[id] || id;
}

// ===== TASK CHECKBOX STRIKE =====
function strikeTask(checkbox) {
  const label = checkbox.closest('label');
  label.classList.toggle('done', checkbox.checked);
}

// ===== AI MOCK RESPONSES =====
const mockResponses = {
  summary:    '📝 Summary: "Newton\'s Laws explain the relationships between force, mass, and acceleration. The first law states an object in motion stays in motion unless acted on by an external force."',
  flashcards: '🃏 Flashcard generated! Q: What is Newton\'s Second Law? A: Force equals mass times acceleration (F = ma).',
  quiz:       '📋 Quiz Question 1/3: What unit measures force in the SI system?\n\n A) Joule   B) Newton ✓   C) Pascal   D) Watt'
};

function showMock(type) {
  const out = document.getElementById('ai-output');
  out.textContent = mockResponses[type] || '';
}

// ===== FLASHCARD FLIP =====
function flipCard() {
  const front = document.getElementById('fc-front');
  const back  = document.getElementById('fc-back');
  const isShowingFront = !front.classList.contains('hidden');
  front.classList.toggle('hidden', isShowingFront);
  back.classList.toggle('hidden', !isShowingFront);
}

// ===== SETTINGS TOGGLES =====
function toggleSwitch(btn) {
  btn.classList.toggle('on');
}
