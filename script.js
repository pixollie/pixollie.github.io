document.getElementById('year').textContent = new Date().getFullYear();

// Keep keyboard focus obvious on the custom consent control.
const optIn = document.getElementById('OPT_IN');
if (optIn) {
  optIn.addEventListener('focus', () => {
    const box = optIn.nextElementSibling;
    if (box) box.style.outline = '3px solid #55d9ff';
  });
  optIn.addEventListener('blur', () => {
    const box = optIn.nextElementSibling;
    if (box) box.style.outline = '';
  });
}
