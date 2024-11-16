let totalPoints = 0;

function completeTask(taskName, points) {
    totalPoints += points;
    updatePointsDisplay();
    updateProgressBar();
    openModal(`You've earned ${points} points for completing "${taskName}"!`);
}

function updatePointsDisplay() {
    document.getElementById('points').innerText = totalPoints;
    document.getElementById('user-points').innerText = totalPoints;
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = Math.min((totalPoints / 100) * 100, 100);
    progressBar.style.width = `${progress}%`;
}

function openModal(message) {
    document.getElementById('reward-message').innerText = message;
    document.getElementById('reward-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('reward-modal').style.display = 'none';
}

function setUserName() {
    const userName = document.getElementById('name-input').value;
    document.getElementById('user-name').innerText = userName || 'You';
}

function submitFeedback() {
    const feedback = document.getElementById('feedback').value.trim();
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.innerText = feedback ? "Thank you for your feedback!" : "Please enter feedback before submitting.";
}
