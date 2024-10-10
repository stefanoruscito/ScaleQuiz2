// Funzione per ottenere un numero casuale in un range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Estrazione casuale di una scala
const scaleKeys = Object.keys(scales);
const randomScale = scaleKeys[getRandomInt(scaleKeys.length)];
const scaleNotes = scales[randomScale];

// Estrazione casuale di un grado della scala
const randomDegree = getRandomInt(scaleNotes.length) + 1; // I gradi vanno da 1 a 7
const correctNote = scaleNotes[randomDegree - 1];

// Visualizza la domanda
document.getElementById('question').textContent = `Qual è la ${randomDegree}ª nota della scala ${randomScale}?`;

// Gestisce l'invio della risposta
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const feedback = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctNote.toLowerCase()) {
        feedback.textContent = 'Corretto!';
    } else {
        feedback.textContent = `Sbagliato! La risposta corretta era: ${correctNote}`;
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
});

// Mostra la scala completa
document.getElementById('show-scale').addEventListener('click', function() {
    document.getElementById('scale-display').textContent = `Scala ${randomScale}: ${scaleNotes.join(', ')}`;
    document.getElementById('full-scale').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
});
