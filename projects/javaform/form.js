const form = document.getElementById('registrationForm');

form.addEventListener('submit', processForm);

function processForm(event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirmPassword').value,
    major: document.getElementById('major').value,
    gpa: document.getElementById('gpa').value
  };

  if (!formData.firstName || !formData.lastName || !formData.email) {
    alert('Please fill in all required fields.');
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (formData.gpa < 0.00 || formData.gpa > 4.00) {
    alert('GPA must be between 0.00 and 4.00.');
    return;
  }

  console.log(formData);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'response.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      document.getElementById('response').innerHTML = response.message;
      form.reset(); // Reset the form
    }
  };
  xhr.send();
}