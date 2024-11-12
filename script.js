document.addEventListener('DOMContentLoaded', () => {
    // Handling Recommendations Form
    const form = document.getElementById('resourceForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const questionnaire = document.getElementById('questionnaire').value;

        // Show spinner
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = 'block';

        // Simulate AI processing with a timeout
        setTimeout(() => {
            const recommendations = getRecommendations(questionnaire);
            displayRecommendations(recommendations);
        }, 2000); // 2-second delay to simulate processing time
    });

    function getRecommendations(input) {
        // Mock recommendations based on input
        return `
            <h3>Your Personalized Recommendations</h3>
            <ul>
                <li>Mindfulness Meditation</li>
                <li>Therapist Directory</li>
                <li>Stress Management Techniques</li>
            </ul>
        `;
    }

    function displayRecommendations(recommendations) {
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = 'none'; // Hide spinner

        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = recommendations;
    }

    // Handling Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const feedbackText = document.getElementById('feedbackText').value;

        // Display feedback received message
        displayFeedbackMessage(`Thank you for your feedback! You said: ${feedbackText}`);
    });

    function displayFeedbackMessage(message) {
        const feedbackMessageDiv = document.getElementById('feedbackMessage');
        feedbackMessageDiv.innerHTML = `<p>${message}</p>`;
    }

    // Function to get daily mental health tips
    function getDailyTips() {
        // Mock tips
        const tips = [
            "Take a 10-minute walk to clear your mind.",
            "Practice deep breathing exercises.",
            "Reach out to a friend or loved one for a chat.",
            "Write down three things you are grateful for.",
            "Take a break from screens and go outside."
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }

    // Display daily tip
    function displayDailyTip() {
        const dailyTipsDiv = document.getElementById('dailyTips');
        dailyTipsDiv.innerHTML = `<p>${getDailyTips()}</p>`;
    }

    // Call displayDailyTip to show a tip when the page loads
    displayDailyTip();

    // Handling Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display contact form message
        displayContactMessage(`Thank you for reaching out, ${name}. We will respond to your message at ${email} shortly.`);
    });

    function displayContactMessage(message) {
        const contactMessageDiv = document.getElementById('contactMessage');
        contactMessageDiv.innerHTML = `<p>${message}</p>`;
    }
});
