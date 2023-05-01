const button = document.querySelector('button');
const label = document.querySelector('label');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

function validation() {
  const emailInput = document.getElementById('email').value;
  if (emailRegex.test(emailInput)) {
    label.innerHTML = 'Valid email address';
    label.style.color = 'green';
  } else {
    label.style.color = 'red';
    label.innerHTML = 'Please provide a valid email address'
  }
}

button.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});