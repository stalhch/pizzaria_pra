document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabs.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

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

    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Данные профиля сохранены!');
        });
    }

    const repeatBtns = document.querySelectorAll('.repeat-order');
    repeatBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Заказ добавлен в корзину!');
        });
    });

    const addAddressBtn = document.querySelector('.add-address-btn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Форма добавления адреса откроется здесь');
        });
    }

    const editLinks = document.querySelectorAll('.address-actions a');
    editLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            if (text === 'Удалить') {
                if (confirm('Удалить этот адрес?')) {
                    this.closest('.address-card').remove();
                }
            } else if (text === 'Сделать основным') {
                alert('Адрес установлен как основной');
            } else if (text === 'Редактировать') {
                alert('Редактирование адреса');
            }
        });
    });

    checkScroll();
});