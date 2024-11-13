 document.addEventListener('DOMContentLoaded', () => {
    const quizButtons = document.querySelectorAll("#quiz button");
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notification-text");

    quizButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const button = e.target;
            const isCorrect = checkAnswer(button); // Verifica si la respuesta es correcta
            showNotification(isCorrect); // Muestra la notificación
        });
    });
});

// Función para verificar si la respuesta es correcta
function checkAnswer(button) {
    const correctAnswers = {
        1: 'falso', // Asume que esta respuesta es correcta, puedes ajustar las respuestas según las preguntas
        2: 'falso',
        3: 'falso',
        4: 'verdadero',
        5: 'falso',
        6: 'b',
        7: 'c',
        8: 'c',
        9: 'b',
        10: 'a'
    };

    const questionId = button.closest('div').querySelector('p').dataset.id;
    const answer = button.getAttribute('data-opcion') || button.className;

    return correctAnswers[questionId] === answer;
}

// Muestra una notificación
function showNotification(isCorrect) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notification-text");

    if (isCorrect) {
        notification.classList.remove("error");
        notification.classList.add("success");
        notificationText.textContent = "¡Respuesta Correcta!";
    } else {
        notification.classList.remove("success");
        notification.classList.add("error");
        notificationText.textContent = "¡Respuesta Incorrecta! Intenta nuevamente.";
    }

    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}