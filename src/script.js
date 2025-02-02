const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  bodyElement.classList.add('dark');
  bodyElement.style.backgroundColor = 'rgb(17, 24, 39)';
}

// Toggle dark class and save preference
themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('dark');


  if (bodyElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});