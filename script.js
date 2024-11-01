// Typewriter Effect
const texts = [
    "Welcome to my personal website.",
    "I'm a Student.",
    "Feel free to connect with me!"
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before typing next text
    } else {
        setTimeout(type, 100);
    }
}());

// Contact Form Submission
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Using Formspree for form handling
    fetch('https://formspree.io/f/xbljdnad', { // Replace with your Formspree form ID
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            formResponse.textContent = "Thank you! Your message has been sent.";
        } else {
            formResponse.textContent = "Oops! There was a problem submitting your form.";
        }
    })
    .catch(error => {
        formResponse.textContent = "Oops! There was a problem submitting your form.";
    });
});