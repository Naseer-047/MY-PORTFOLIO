
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
;
        });
      let data=[
{
projecttitle:'cencus-app',
projdesc:'This is Fully featured cencius app lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
{
projecttitle:'Ecommerce-app',
projdesc:'This is Fully featured Ecommerce  lorem23 dfsa dsfre  ',
langsused1: 'python',
langsused2:'node js',
langsused3:'react',
link:''
   },
]

let clutter=``

data.forEach((ele)=>{
    clutter+=`
     <div class="project-card hamburger-card overflow-hidden zoom-in will-change" data-animate>
                    <div class="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"><img class="w-full h-full" src="/MY-POTFOLIO/img/download.jpg" alt=""></div>
                    <div class="p-6 md:p-8">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">${ele.langsused1}</span>
                            <span class="px-3 py-1 bg-green-900/10 text-green-900 text-sm rounded-full">${ele.langsused2}</span>
                            <span class="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full">${ele.langsused3}</span>
                        </div>
                        <h3 class="text-xl md:text-2xl font-bold mb-3">${ele.projecttitle}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            ${ele.projdesc}
                        </p>
                        <a href="#" class="text-primary font-medium hover:underline inline-flex items-center stagger-btn">
                            <span>V</span><span>i</span><span>e</span><span>w</span>
                            <span> </span>
                            <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span>
                            <i class="fas logu fa-arrow-right mr-2"></i>
                        </a>
                    </div>
                </div>
    
    `
})
let display=document.getElementById("disp")
display.innerHTML=clutter