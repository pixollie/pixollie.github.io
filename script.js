const form = document.getElementById('sib-form');
const optIn = document.getElementById('OPT_IN');
const consentField = document.querySelector('.pix-consent-field');

if (form && optIn && consentField) {
  const consentError = consentField.querySelector('.entry__error');
  const consentErrorMessage = 'Oi! Tick this box to get Chuck Lite.';

  const showConsentError = () => {
    if (consentError) {
      consentError.textContent = consentErrorMessage;
    }

    optIn.setAttribute('aria-invalid', 'true');
    optIn.setCustomValidity(consentErrorMessage);
    optIn.style.outline = '2px solid #9d3f45';
    optIn.style.outlineOffset = '2px';
  };

  const clearConsentError = () => {
    if (consentError && consentError.textContent === consentErrorMessage) {
      consentError.textContent = '';
    }

    optIn.removeAttribute('aria-invalid');
    optIn.setCustomValidity('');
    optIn.style.outline = '';
    optIn.style.outlineOffset = '';
  };

  const requireConsent = () => {
    if (optIn.checked) {
      clearConsentError();
      return true;
    }

    showConsentError();
    optIn.focus({ preventScroll: true });
    optIn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
  };

  /* Catch the CTA before Brevo's own click handler can submit the form. */
  document.addEventListener(
    'click',
    (event) => {
      const submitButton = event.target.closest('#sib-form button[type="submit"]');
      if (!submitButton) return;

      if (!requireConsent()) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );

  /* Also block keyboard/other form submissions when consent is missing. */
  form.addEventListener(
    'submit',
    (event) => {
      if (!requireConsent()) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );

  optIn.addEventListener('change', () => {
    if (optIn.checked) {
      clearConsentError();
    }
  });
}
