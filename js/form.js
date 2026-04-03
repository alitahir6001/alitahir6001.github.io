const form = document.getElementById('feedbackForm');
const formContainer = document.getElementById('feedbackFormContainer');
const thankYouMessage = document.getElementById('thankYouMessage');

function sanitizeInput(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .trim();
}

function validateTextLength(value, max = 800) {
  return typeof value === 'string' && value.length > 0 && value.length <= max;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitButton = form.querySelector('.btn');
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  const frustration = sanitizeInput(document.getElementById('q1').value);
  const helpfulness = parseInt(document.getElementById('q2').value, 10);
  const quizValue = sanitizeInput(document.getElementById('q3').value);

  if (!validateTextLength(frustration) || !validateTextLength(quizValue)) {
    alert('Please keep text responses between 1 and 800 characters.');
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Feedback';
    return;
  }

  if (!Number.isInteger(helpfulness) || helpfulness < 1 || helpfulness > 10) {
    alert('Please provide a helpfulness rating from 1 to 10.');
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Feedback';
    return;
  }

  const data = {
    frustration,
    helpfulness_rating: helpfulness,
    quiz_value: quizValue,
    submitted_at: new Date().toISOString()
  };

  try {
    const response = await fetch('YOUR_BACKEND_URL_HERE/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      formContainer.style.display = 'none';
      thankYouMessage.style.display = 'block';
    } else {
      throw new Error('Feedback submit failed.');
    }
  } catch (error) {
    alert('There was an error submitting your feedback. Please try again.');
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Feedback';
  }
});
