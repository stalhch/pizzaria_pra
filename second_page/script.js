    const burger = document.querySelector('.burger');
    const navHeader = document.querySelector('.nav_header');
    
    let navContainer = document.querySelector('.nav-container');
    
    if (!navContainer && navHeader) {
        const header = document.querySelector('header');
        navContainer = document.createElement('div');
        navContainer.className = 'nav-container';
        
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(navContainer, header.nextSibling);
        } else if (header) {
            header.parentNode.appendChild(navContainer);
        }
        
        navContainer.appendChild(navHeader);
    }
    
    function checkMobile() {
        if (window.innerWidth <= 768 && navContainer) {
            navContainer.classList.remove('show');
        } else if (navContainer) {
            navContainer.classList.add('show');
        }
    }
    
    if (burger) {
        burger.addEventListener('click', function(e) {
            e.preventDefault();
            if (navContainer) {
                navContainer.classList.toggle('show');
            }
        });
    }
    
    window.addEventListener('resize', checkMobile);
    
    checkMobile();

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