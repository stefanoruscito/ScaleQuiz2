// Function to get a random integer within a range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Randomly extract a scale
const scaleKeys = Object.keys(scales);
const randomScale = scaleKeys[getRandomInt(scaleKeys.length)];
const scaleData = scales[randomScale];
const scaleNotes = scaleData.notes;
const scaleDegrees = scaleData.degrees;

// Randomly extract a degree from the scale
const randomDegreeIndex = getRandomInt(scaleNotes.length);
const correctNote = scaleNotes[randomDegreeIndex];
const degree = scaleDegrees[randomDegreeIndex];

// Display the question
document.getElementById('question').textContent = `What is the ${degree} note of the ${randomScale} scale?`;

// Handle answer submission
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const feedback = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctNote.toLowerCase()) {
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = `Incorrect! The correct answer was: ${correctNote}`;
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
});

// Show the full scale
document.getElementById('show-scale').addEventListener('click', function() {
    const scaleDisplay = scaleNotes.map((note, index) => `${scaleDegrees[index]}: ${note}`).join(', ');
    document.getElementById('scale-display').textContent = `${randomScale
