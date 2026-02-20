const tg = window.Telegram.WebApp;
tg.expand();

// Обработка выбора времени
const timeButtons = document.querySelectorAll('.time-btn');
timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        timeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const generateBtn = document.getElementById('generate-btn');
const overlay = document.getElementById('result-overlay');

generateBtn.addEventListener('click', async () => {
    const asset = document.getElementById('asset-select').value;
    const timeframe = document.querySelector('.time-btn.active').dataset.time;

    // Эффект нажатия
    tg.HapticFeedback.impactOccurred('medium');
    generateBtn.innerText = "АНАЛИЗ РЫНКА...";

    try {
        // ЗАМЕНИТЕ ЭТОТ URL НА ВАШ БЭКЕНД (из предыдущего ответа)
        // const response = await fetch(`https://your-api.com/get_signal?asset=${asset}&timeframe=${timeframe}`);
        // const data = await response.json();
        
        // Имитация задержки для солидности
        setTimeout(() => {
            showResult(asset, Math.random() > 0.5 ? 'CALL' : 'PUT', Math.floor(Math.random() * 15) + 80);
        }, 1500);

    } catch (e) {
        alert("Ошибка связи с сервером CLSTR AI");
    }
});

function showResult(pair, dir, acc) {
    document.getElementById('res-pair').innerText = pair;
    const resDir = document.getElementById('res-direction');
    resDir.innerText = dir === 'CALL' ? 'ВВЕРХ ⬆️' : 'ВНИЗ ⬇️';
    resDir.style.color = dir === 'CALL' ? '#00ff66' : '#ff3333';
    document.getElementById('res-perc').innerText = acc;
    
    overlay.style.display = 'flex';
    tg.HapticFeedback.notificationOccurred('success');
    generateBtn.innerText = "Получить сигнал";
}

function closeResult() {
    overlay.style.display = 'none';
}

