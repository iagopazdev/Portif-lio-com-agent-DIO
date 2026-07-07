// Selecionando os elementos HTML que vamos manipular
const recButton = document.getElementById('rec-btn');
const recTimer = document.getElementById('rec-timer');
const viewfinder = document.getElementById('viewfinder');

// Variáveis para controlar o estado da gravação e do cronômetro
let isRecording = false;
let timerId = null;
let totalSeconds = 0;

// Função para formatar o tempo em HH:MM:SS
function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Função que inicia o cronômetro
function startTimer() {
    totalSeconds = 0;
    recTimer.textContent = formatTime(totalSeconds);
    
    timerId = setInterval(() => {
        totalSeconds++;
        recTimer.textContent = formatTime(totalSeconds);
    }, 1000);
}

// Função que para o cronômetro
function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

// Adicionando o evento de clique no botão de REC
recButton.addEventListener('click', () => {
    isRecording = !isRecording; // Inverte o estado (se era verdadeiro vira falso e vice-versa)

    if (isRecording) {
        // 1. Atualiza o visual do botão
        recButton.textContent = 'Parar Gravação';
        recButton.classList.add('recording');

        // 2. Mostra o cronômetro e a grade da câmera (viewfinder)
        recTimer.classList.remove('hidden-timer');
        viewfinder.classList.remove('hidden-viewfinder');

        // 3. Inicia a contagem
        startTimer();
        console.log("Gravação de transição de carreira iniciada!");
    } else {
        // 1. Restaura o visual do botão
        recButton.textContent = 'Iniciar Gravação (REC)';
        recButton.classList.remove('recording');

        // 2. Esconde o cronômetro e o viewfinder
        recTimer.classList.add('hidden-timer');
        viewfinder.classList.add('hidden-viewfinder');

        // 3. Para a contagem
        stopTimer();
        console.log("Gravação de transição de carreira parada.");
    }
});
