
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
let data = [
  // ================= ADVANCED PROJECTS =================

  {
    projecttitle: 'AI Resume Analyzer',
    projdesc: 'AI-powered resume analyzer that evaluates ATS score, skills, and gives improvement suggestions.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Python',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    link: ''
  },
  {
    projecttitle: 'Real-Time Code Collaboration Tool',
    projdesc: 'Live collaborative code editor with multi-user cursor sync like Google Docs.',
    langsused1: 'React',
    langsused2: 'WebSockets',
    langsused3: 'Node.js',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    link: ''
  },
  {
    projecttitle: 'SaaS Subscription Platform',
    projdesc: 'Complete SaaS application with authentication, subscription plans, and payment integration.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Stripe API',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    link: ''
  },
  {
    projecttitle: 'AI Chatbot Web App',
    projdesc: 'Smart AI chatbot for customer support, FAQs, and productivity use cases.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'AI API',
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    link: ''
  },
  {
    projecttitle: 'Online Code Judge',
    projdesc: 'Platform to submit code, execute it securely, and evaluate against test cases.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Docker',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    link: ''
  },
  {
    projecttitle: 'Real-Time Stock Trading Simulator',
    projdesc: 'Live stock market simulator with real-time prices and virtual trading system.',
    langsused1: 'React',
    langsused2: 'WebSockets',
    langsused3: 'API',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    link: ''
  },
  {
    projecttitle: 'Expense Tracker with Analytics',
    projdesc: 'Tracks expenses and displays insights using charts and monthly analytics.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Chart.js',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    link: ''
  },
  {
    projecttitle: 'Cloud File Storage System',
    projdesc: 'Cloud-based file upload, storage, sharing, and access control system.',
    langsused1: 'React',
    langsused2: 'Firebase',
    langsused3: 'Cloud Storage',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    link: ''
  },
  {
    projecttitle: 'Learning Management System (LMS)',
    projdesc: 'Online learning platform with courses, quizzes, certificates, and dashboards.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'MongoDB',
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    link: ''
  },
  {
    projecttitle: 'AI Image Generator',
    projdesc: 'Generate images from text prompts using artificial intelligence models.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'AI API',
    img: 'https://images.unsplash.com/photo-1686191128892-3b8b0a0f5c5b?w=800',
    link: ''
  },
  {
    projecttitle: 'Real-Time Multiplayer Game',
    projdesc: 'Online multiplayer game with real-time player synchronization and chat.',
    langsused1: 'JavaScript',
    langsused2: 'WebSockets',
    langsused3: 'Three.js',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    link: ''
  },
  {
    projecttitle: 'Job Portal with Admin Panel',
    projdesc: 'Job portal where recruiters post jobs, users apply, and admin manages platform.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'MongoDB',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
    link: ''
  },
  {
    projecttitle: 'Smart E-Commerce Platform',
    projdesc: 'Advanced e-commerce app with AI recommendations, payments, and order tracking.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Stripe API',
    img: 'https://images.unsplash.com/photo-1515165562835-c4c4b0c79a02?w=800',
    link: ''
  },
  {
    projecttitle: 'System Design Visualizer',
    projdesc: 'Interactive system design and architecture diagram visualizer.',
    langsused1: 'React',
    langsused2: 'D3.js',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    link: ''
  },
  {
    projecttitle: 'Video Calling Web App',
    projdesc: 'Peer-to-peer video calling app with chat and screen sharing.',
    langsused1: 'WebRTC',
    langsused2: 'JavaScript',
    langsused3: 'Node.js',
    img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800',
    link: ''
  },
  {
    projecttitle: 'Project Management Tool',
    projdesc: 'Jira-like project management system with tasks, boards, and analytics.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'MongoDB',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
    link: ''
  },
  {
    projecttitle: 'AI Interview Preparation Platform',
    projdesc: 'AI-powered mock interview platform with feedback and performance analysis.',
    langsused1: 'React',
    langsused2: 'Python',
    langsused3: 'AI API',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    link: ''
  },
  {
    projecttitle: 'Cybersecurity Monitoring Dashboard',
    projdesc: 'Dashboard to monitor system threats, logs, and security analytics.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Elasticsearch',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    link: ''
  },
  {
    projecttitle: 'Low-Code Website Builder',
    projdesc: 'Drag-and-drop website builder with live preview and export options.',
    langsused1: 'React',
    langsused2: 'JavaScript',
    langsused3: 'Tailwind CSS',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800',
    link: ''
  },
  {
    projecttitle: 'DevOps Monitoring Dashboard',
    projdesc: 'Monitors server performance, logs, uptime, CPU and memory usage.',
    langsused1: 'React',
    langsused2: 'Node.js',
    langsused3: 'Grafana API',
    img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800',
    link: ''
  },

  // ================= BASIC + INTERMEDIATE PROJECTS =================

  {
    projecttitle: 'Calculator',
    projdesc: 'Responsive calculator supporting basic arithmetic operations with clean UI.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800',
    link: ''
  },
  {
    projecttitle: 'Quiz App',
    projdesc: 'Interactive quiz app with multiple questions, score tracking, and timer functionality.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    link: ''
  },
  {
    projecttitle: 'Weather App',
    projdesc: 'Fetches real-time weather data using API based on city or location.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800',
    link: ''
  },
  {
    projecttitle: 'Ecommerce Website',
    projdesc: 'Online shopping platform with product listing and cart system.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800',
    link: ''
  },
  {
    projecttitle: 'Portfolio Website',
    projdesc: 'Personal portfolio showcasing skills, projects, and contact info.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    link: ''
  },
  {
    projecttitle: 'Chat App',
    projdesc: 'Real-time chat application with authentication.',
    langsused1: 'JavaScript',
    langsused2: 'Firebase',
    langsused3: 'HTML',
    img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800',
    link: ''
  },
  {
    projecttitle: 'Netflix Clone',
    projdesc: 'Movie streaming UI clone with categories and previews.',
    langsused1: 'React',
    langsused2: 'JavaScript',
    langsused3: 'CSS',
    img: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800',
    link: ''
  },
  {
    projecttitle: 'Music Player',
    projdesc: 'Music player with playlist and controls.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    link: ''
  },
  {
    projecttitle: 'Typing Speed Test',
    projdesc: 'Measures typing speed and accuracy in real time.',
    langsused1: 'HTML',
    langsused2: 'CSS',
    langsused3: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    link: ''
  }
];




let clutter=``

data.forEach((ele)=>{
    clutter+=`
     <div class="project-card hamburger-card overflow-hidden zoom-in will-change" data-animate>
                    <div class="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"><img class="w-full h-full" src="${ele.img}" alt=""></div>
                    <div class="p-6 md:p-8">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">${ele.langsused1}</span>
                            <span class="px-3 py-1 bg-yellow-600/10 text-yellow-500 text-sm rounded-full">${ele.langsused2}</span>
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