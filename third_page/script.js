const scrollBtn = document.getElementById('scrollTopBtn');
const footerTopBtn = document.getElementById('footerTopBtn');

console.log('Кнопка найдена:', scrollBtn);

function checkScroll() {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', checkScroll);

if (scrollBtn) {
    scrollBtn.addEventListener('click', scrollToTop);
}

if (footerTopBtn) {
    footerTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
}

// === Модальное окно оформления заказа ===
const modal = document.getElementById('orderModal');
const orderBtn = document.querySelector('.in_bask'); // Кнопка "ОФОРМИТЬ ЗАКАЗ"
const closeBtn = document.querySelector('.modal-close');
const orderForm = document.getElementById('orderForm');

// Функция открытия модального окна
function openModal() {
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
}

// Функция закрытия модального окна
function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Восстанавливаем скролл
    }
}

// Открытие модального окна при клике на "ОФОРМИТЬ ЗАКАЗ"
if (orderBtn) {
    orderBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
}

// Закрытие при клике на крестик
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Закрытие при клике вне модального окна
if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Обработка отправки формы
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем значения полей
        const phone = document.getElementById('phone')?.value.trim();
        const address = document.getElementById('address')?.value.trim();
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        
        // Простая валидация
        if (!phone) {
            alert('Пожалуйста, укажите номер телефона');
            return;
        }
        
        if (!address) {
            alert('Пожалуйста, укажите адрес доставки');
            return;
        }
        
        if (!paymentMethod) {
            alert('Пожалуйста, выберите способ оплаты');
            return;
        }
        
        // Сохраняем данные заказа в localStorage (опционально)
        const orderData = {
            phone: phone,
            address: address,
            payment: paymentMethod.value,
            date: new Date().toLocaleString()
        };
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        
        // Показываем сообщение об успешном заказе
        alert(`Заказ оформлен!\n\nТелефон: ${phone}\nАдрес: ${address}\nОплата: ${paymentMethod.value === 'cash' ? 'Наличные' : paymentMethod.value === 'sbp' ? 'СБП' : 'Карта'}\n\nСпасибо за заказ!`);
        
        // Закрываем модальное окно
        closeModal();
        
        // Очищаем форму
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        
        // ССЫЛКА НА СТРАНИЦУ ПОЛЬЗОВАТЕЛЯ
        // Раскомментируй нужный вариант:
        
        // Вариант 1: Переход на страницу личного кабинета
        window.location.href = '../four_page/cabinet.html';
        
        // Вариант 2: Переход на главную страницу
        // window.location.href = '../index.html';
        
        // Вариант 3: Открыть в новой вкладке (если нужно сохранить текущую страницу)
        // window.open('../four_page/cabinet.html', '_blank');
    });
}

// Обработка клавиши Escape для закрытия модального окна
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeModal();
    }
});