const CORRECT_PASSWORD = 'Vallery2026'; // À personnaliser

function checkAccess() {
  const pwdFr = document.getElementById('password').value;
  const pwdEn = document.getElementById('password-en').value;
  const password = pwdFr || pwdEn;
  
  if (password === CORRECT_PASSWORD) {
    localStorage.setItem('weddingAccess', 'granted');
    showContent();
  } else {
    document.getElementById('error-msg').textContent = 'Mot de passe incorrect';
    document.getElementById('error-msg-en').textContent = 'Incorrect password';
  }
}

function showContent() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

// Vérifie l'accès au chargement
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('weddingAccess') === 'granted') {
    showContent();
  }
});

function switchAuthLang(lang) {
  document.querySelectorAll('.auth-content').forEach(el => {
    el.style.display = el.dataset.lang === lang ? 'block' : 'none';
  });
  document.querySelectorAll('.auth-lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });
}
