        const numberToGuess = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guess').value);
            attempts++;
            let message = '';

            if (userGuess === numberToGuess) {
                message = `¡Correcto! Lo adivinaste en ${attempts} intentos.`;
            } else if (userGuess < numberToGuess) {
                message = 'El número es mayor.';
            } else {
                message = 'El número es menor.';
            }

            document.getElementById('message').textContent = message;
        }
        