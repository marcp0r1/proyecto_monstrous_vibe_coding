// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const eye = document.getElementById('eye');
    const monster = document.getElementById('monster');
    const scareBtn = document.getElementById('scare-btn');

    // Variable para rastrear el estado de los brazos
    let armsUp = false;

    // Evento de click en el ojo
    if (eye) {
        eye.addEventListener('click', () => {
            if (!armsUp) {
                // Subimos los brazos añadiendo la clase CSS
                monster.classList.add('arms-up');
                armsUp = true;
                console.log("¡Hola! 👋");
            } else {
                // Bajamos los brazos quitando la clase CSS
                monster.classList.remove('arms-up');
                armsUp = false;
                console.log("Adiós... 😔");
            }
        });
    }

    // Evento de botón Peligro (Susto)
    if (scareBtn) {
        scareBtn.addEventListener('click', () => {
            window.location.href = 'susto.html';
        });
    }
});
