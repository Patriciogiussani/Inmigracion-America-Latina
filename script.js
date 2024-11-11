// Función para verificar respuestas
function checkAnswer(option, correct) {
    if (correct) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. Intenta de nuevo.");
    }
}

// Función para reiniciar las respuestas seleccionadas (opcional)
function resetQuiz() {
    const buttons = document.querySelectorAll("#quiz button");
    buttons.forEach(button => {
        button.classList.remove("selected");
    });
}
