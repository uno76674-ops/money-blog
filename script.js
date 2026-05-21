// === 1. АВТОМАТИЗАЦИЯ ПАРТНЕРСКИХ ССЫЛОК ===
document.addEventListener("DOMContentLoaded", function() {
    // Укажите домен магазина (например, Яндекс Маркет, Алиэкспресс или Литрес)
    const partnerDomain = "market.yandex.ru"; 
    // Ваш реальный ID партнера, полученный в CPA-сети (Admitad, Яндекс Дистрибуция и т.д.)
    const myPartnerId = "YOUR_AFFILIATE_ID_555"; 

    // Находим все ссылки на странице
    const allLinks = document.querySelectorAll("a");
    
    allLinks.forEach(link => {
        // Если ссылка ведет на нужный магазин и еще не содержит партнерский хвост
        if (link.href.includes(partnerDomain) && !link.href.includes("clid")) {
            const separator = link.href.includes("?") ? "&" : "?";
            // Дописываем партнерский идентификатор в конец ссылки
            link.href = `${link.href}${separator}clid=${myPartnerId}`;
            console.log("Ссылка успешно монетизирована:", link.href);
        }
    });
});

// === 2. ЛОГИКА ОПЛАТЫ И ОТКРЫТИЯ КОНТЕНТА (PAYWALL) ===
function processPayment() {
    // Делаем кнопку неактивной на время "оплаты"
    const payButton = document.querySelector('.pay-btn');
    payButton.innerText = "Ожидание оплаты...";
    payButton.disabled = true;

    // Имитируем запрос к платежной системе (ЮKassa / Prodamus / Робокасса)
    // В реальной жизни здесь будет перенаправление на страницу оплаты банка
    setTimeout(() => {
        // Предположим, платеж прошел успешно:
        alert("Оплата успешно принята! Доступ открыт.");
        
        // 1. Показываем скрытый контент
        const premiumContent = document.getElementById('premium-content');
        premiumContent.classList.remove('blurred-content');
        
        // 2. Уничтожаем баннер-заглушку с кнопкой оплаты
        document.getElementById('paywall-gate').style.display = 'none';
    }, 2000); // Имитация задержки сети 2 секунды
}
