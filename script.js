const optIn = document.getElementById('OPT_IN');

if (optIn) {
  optIn.addEventListener('focus', () => {
    const box = optIn.nextElementSibling;
    if (box) box.style.outline = '2px solid #c8664b';
  });

  optIn.addEventListener('blur', () => {
    const box = optIn.nextElementSibling;
    if (box) box.style.outline = '';
  });
}
