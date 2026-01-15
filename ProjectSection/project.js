
        function initCustomCursor() {
            const cursor = document.getElementById('customCursor');
            
            // Only show cursor on desktop
            if (window.innerWidth > 768) {
                cursor.style.display = 'block';
                
                document.addEventListener('mousemove', (e) => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                });
                
                // Hover effects
                const hoverElements = document.querySelectorAll('a, button, .theme-toggle');
                hoverElements.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursor.classList.add('hover');
                    });
                    el.addEventListener('mouseleave', () => {
                        cursor.classList.remove('hover');
                    });
                });
            }
        }
        
        // Initialize Theme - SIMPLE FIX
        function initTheme() {
            const themeToggle = document.getElementById('themeToggle');
            const mobileThemeToggle = document.getElementById('mobileThemeToggle');
            const themeText = document.getElementById('themeText');
            const mobileThemeText = document.getElementById('mobileThemeText');
            const body = document.body;
            
            // Check saved theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark');
                themeText.textContent = 'Dark';
                mobileThemeText.textContent = 'Dark';
            }
            
            // Toggle theme function
            function toggleTheme() {
                body.classList.toggle('dark');
                const isDark = body.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                themeText.textContent = isDark ? 'Dark' : 'Light';
                mobileThemeText.textContent = isDark ? 'Dark' : 'Light';
            }
            
            // Add event listeners
            themeToggle.addEventListener('click', toggleTheme);
            mobileThemeToggle.addEventListener('click', toggleTheme);
        }
        

        
        // Loading Screen
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                initStaggerAnimations();
                initScrollAnimations();
            }, 500);
        }, 1500);
        
        // Stagger Animations
        function initStaggerAnimations() {
            // Stagger text animation
            document.querySelectorAll('.stagger-text').forEach(element => {
                const text = element.textContent;
                element.innerHTML = '';
                text.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.animationDelay = `${i * 0.05}s`;
                    element.appendChild(span);
                });
                
                element.querySelectorAll('span').forEach((span, i) => {
                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    }, i * 50);
                });
            });
            
            // Stagger button text animation
          
            
            // Stagger menu animation
            document.querySelectorAll('.stagger-menu a').forEach((link, i) => {
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                    
                }, i * 100);
            });
        }
        
        // Mobile Menu Toggle - SIMPLE FIX
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
        
        closeMobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        // Close mobile menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Animate Skill Bars on Scroll
        
        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        

      
        
        // Scroll Animations
        function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const element = entry.target;
                    const delay = element.getAttribute('data-delay') || 0;
                    
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            element.classList.add('animated');
                        }, parseInt(delay));
                    } else {
                        element.classList.remove('animated');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('[data-animate]').forEach(element => {
                observer.observe(element);
            });
        }
        
  
        
        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            initCustomCursor();
            initTheme();
            initTypewriter();
            animateSkillBars();
        });
   