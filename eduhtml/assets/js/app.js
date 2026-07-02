// Global Application State, Storage & Bilingual Translation Handler
const EduHTML = {
    // Total numbers of lessons and badges for progress calculation
    totalLessons: 7,
    
    // Default initial state
    defaultState: {
        lessonsCompleted: [],
        quizzesCompleted: false,
        quizScore: 0,
        badgesUnlocked: [] // Possible values: 'welcome', 'lesson_champ', 'quiz_master', 'visualizer_pro', 'code_ninja', 'js_wizard'
    },

    // Translation Registry
    translations: {
        en: {
            "logo-subtitle": "v1.0",
            "nav-dashboard": "Dashboard",
            "nav-lessons": "Lessons",
            "nav-playground": "Playground",
            "nav-box-model": "Box Model",
            "nav-quiz": "Quiz",
            "btn-start-coding": "Start Coding",
            "btn-start-first-lesson": "Start First Lesson",
            "btn-open-editor": "Open Live Editor",
            "hero-title": "Learn HTML, CSS & JS",
            "hero-subtitle": "Welcome to your interactive coding companion! Follow the learning path below, practice in the live playground, and test your skills with interactive quizzes.",
            
            // Dashboard Specific
            "roadmap-title": "Learning Roadmap",
            "your-progress": "Your Progress",
            "stat-lessons-completed": "Lessons Complete",
            "stat-quiz-score": "Quiz Score",
            "stat-badges-earned": "Badges Earned",
            "stat-quiz-uncompleted": "Not Completed",
            "stat-quiz-completed": "Completed",
            "achievements-title": "Achievements",
            "achievements-subtitle": "Earn badges as you interact with all modules of the learning hub.",
            
            // Roadmap Step Labels
            "step-tags-title": "HTML Tag Basics",
            "step-tags-desc": "Understand elements, head, body, headings, and paragraphs.",
            "step-formatting-title": "Text Formatting",
            "step-formatting-desc": "Learn how to make text bold, italic, highlighted, and formatted.",
            "step-lists-title": "Lists & Tables",
            "step-lists-desc": "Organize information using ordered/unordered lists and semantic tables.",
            "step-links-title": "Links & Images",
            "step-links-desc": "Add anchors, relative/absolute links, and embed images with alt text.",
            "step-css-title": "CSS Intro & Style Rules",
            "step-css-desc": "Connect styles, change colors, fonts, margins, and border models.",
            "step-js-basics-title": "JavaScript Basics",
            "step-js-basics-desc": "Variables, data types, standard functions, and console statements.",
            "step-js-dom-title": "DOM & Interactive Events",
            "step-js-dom-desc": "Click events, selectors, and altering HTML elements dynamically.",
            "step-quiz-title": "Final Quiz Challenge",
            "step-quiz-desc": "Take the 10-question quiz to lock in your learning certification badge!",
            
            // Status Tags
            "status-start": "Start",
            "status-completed": "Completed",
            "status-in-progress": "In Progress",
            "status-locked": "Locked",
            "status-ready": "Ready",

            // Badges Titles
            "badge-welcome-title": "Welcome",
            "badge-welcome-desc": "Unlocked by entering the hub. Welcome!",
            "badge-lesson-title": "Lesson Champ",
            "badge-lesson-desc": "Complete all seven lessons.",
            "badge-quiz-title": "Quiz Master",
            "badge-quiz-desc": "Pass the final quiz with a perfect score!",
            "badge-box-title": "Box Master",
            "badge-box-desc": "Play with the Box Model Simulator sliders.",
            "badge-ninja-title": "Code Ninja",
            "badge-ninja-desc": "Write or load a custom layout in the playground.",
            "badge-js-title": "JS Wizard",
            "badge-js-desc": "Complete the JavaScript roadmap modules.",

            // Footer
            "footer-text": "&copy; 2026 EduHTML. Created to teach HTML, CSS and JS dynamically."
        },
        bn: {
            "logo-subtitle": "ভার্সন ১.০",
            "nav-dashboard": "ড্যাশবোর্ড",
            "nav-lessons": "লেসনসমূহ",
            "nav-playground": "প্লেগ্রাউন্ড",
            "nav-box-model": "বক্স মডেল",
            "nav-quiz": "কুইজ",
            "btn-start-coding": "কোডিং শুরু করো",
            "btn-start-first-lesson": "প্রথম লেসন শুরু করো",
            "btn-open-editor": "লাইভ এডিটর খোলো",
            "hero-title": "HTML, CSS এবং JS শিখুন",
            "hero-subtitle": "আপনার ইন্টারেক্টিভ কোডিং সহচরে স্বাগতম! নিচের লার্নিং পথ অনুসরণ করুন, লাইভ প্লেগ্রাউন্ডে কোড প্র্যাকটিস করুন এবং কুইজের মাধ্যমে আপনার দক্ষতা যাচাই করুন।",
            
            // Dashboard Specific
            "roadmap-title": "লার্নিং রোডম্যাপ",
            "your-progress": "আপনার অগ্রগতি",
            "stat-lessons-completed": "সম্পন্ন লেসনসমূহ",
            "stat-quiz-score": "কুইজ স্কোর",
            "stat-badges-earned": "অর্জিত ব্যাজসমূহ",
            "stat-quiz-uncompleted": "সম্পন্ন করা হয়নি",
            "stat-quiz-completed": "সম্পন্ন হয়েছে",
            "achievements-title": "অর্জনসমূহ",
            "achievements-subtitle": "লার্নিং হাবের সব মডিউল সম্পন্ন করে আকর্ষণীয় ব্যাজ অর্জন করুন।",
            
            // Roadmap Step Labels
            "step-tags-title": "এইচটিএমএল ট্যাগ পরিচিতি",
            "step-tags-desc": "এলিমেন্টস, হেড, বডি, হেডিংস এবং প্যারাগ্রাফ সম্পর্কে জানুন।",
            "step-formatting-title": "টেক্সট ফরম্যাটিং",
            "step-formatting-desc": "টেক্সট বোল্ড, ইটালিক, হাইলাইট এবং ফরম্যাট করা শিখুন।",
            "step-lists-title": "লিস্ট ও টেবিল",
            "step-lists-desc": "অর্ডারড/আনঅর্ডারড লিস্ট এবং টেবিল ব্যবহার করে তথ্য সাজানো শিখুন।",
            "step-links-title": "লিঙ্ক ও ইমেজ",
            "step-links-desc": "অ্যাঙ্কর, রিলেটিভ/অ্যাবসলিউট লিঙ্ক যোগ করুন এবং ইমেজ এম্বেড করুন।",
            "step-css-title": "সিএসএস পরিচিতি ও স্টাইল রুলস",
            "step-css-desc": "স্টাইল লিঙ্ক করা, কালার, ফন্ট, মার্জিন ও বর্ডার মডেল পরিবর্তন করা শিখুন।",
            "step-js-basics-title": "জাভাস্ক্রিপ্ট বেসিকস",
            "step-js-basics-desc": "ভেরিয়েবল, ডাটা টাইপ, ফাংশন এবং কনসোল স্টেটমেন্ট সম্পর্কে জানুন।",
            "step-js-dom-title": "ডম ও ইন্টারেক্টিভ ইভেন্টস",
            "step-js-dom-desc": "ক্লিক ইভেন্ট, সিলেক্টর এবং ডাইনামিকালি এইচটিএমএল এলিমেন্ট পরিবর্তন।",
            "step-quiz-title": "ফাইনাল কুইজ চ্যালেঞ্জ",
            "step-quiz-desc": "আপনার সার্টিফিকেট ব্যাজটি আনলক করতে ১০টি প্রশ্নের কুইজে অংশ নিন!",
            
            // Status Tags
            "status-start": "শুরু",
            "status-completed": "সম্পন্ন",
            "status-in-progress": "চলমান",
            "status-locked": "লকড",
            "status-ready": "প্রস্তুত",

            // Badges Titles
            "badge-welcome-title": "স্বাগতম",
            "badge-welcome-desc": "হাবে প্রথমবার প্রবেশের জন্য আনলক হয়েছে। স্বাগতম!",
            "badge-lesson-title": "লেসন চ্যাম্প",
            "badge-lesson-desc": "সবগুলো ৭টি লেসন সম্পন্ন করুন।",
            "badge-quiz-title": "কুইজ মাস্টার",
            "badge-quiz-desc": "ফাইনাল কুইজে ১০/১০ স্কোর অর্জন করুন!",
            "badge-box-title": "বক্স মাস্টার",
            "badge-box-desc": "বক্স মডেল সিমুলেটরের স্লাইডারগুলো নিয়ে খেলুন।",
            "badge-ninja-title": "কোড নিনজা",
            "badge-ninja-desc": "প্লেগ্রাউন্ডে কোড এডিট করুন অথবা টেমপ্লেট লোড করুন।",
            "badge-js-title": "জেএস উইজার্ড",
            "badge-js-desc": "জাভাস্ক্রিপ্ট রোডম্যাপের মডিউলগুলো সম্পন্ন করুন।",

            // Footer
            "footer-text": "&copy; ২০২৬ EduHTML। এইচটিএমএল, সিএসএস এবং জাভাস্ক্রিপ্ট শেখার ইন্টারেক্টিভ প্লাটফর্ম।"
        }
    },

    // Get current language from LocalStorage
    getLanguage() {
        return localStorage.getItem('eduhtml_lang') || 'en';
    },

    // Set active language and save to LocalStorage
    setLanguage(lang) {
        localStorage.setItem('eduhtml_lang', lang);
        this.applyTranslations();
        this.updateDashboardUI();
        
        // Trigger page-specific translation updates if defined
        if (typeof window.onLanguageChange === 'function') {
            window.onLanguageChange(lang);
        }
    },

    // Translate a single key
    translate(key) {
        const lang = this.getLanguage();
        return this.translations[lang]?.[key] || key;
    },

    // Loop DOM elements with data-translate attribute and apply values
    applyTranslations() {
        const lang = this.getLanguage();
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = this.translations[lang]?.[key];
            if (translation !== undefined) {
                // If it is input element placeholder
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.setAttribute('placeholder', translation);
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Set title attributes for badges
        const badges = ['welcome', 'lesson_champ', 'quiz_master', 'visualizer_pro', 'code_ninja', 'js_wizard'];
        badges.forEach(b => {
            const badgeEl = document.getElementById(`badge-${b}`);
            if (badgeEl) {
                badgeEl.setAttribute('title', this.translate(`badge-${b === 'lesson_champ' ? 'lesson' : b === 'quiz_master' ? 'quiz' : b === 'visualizer_pro' ? 'box' : b === 'code_ninja' ? 'ninja' : b === 'js_wizard' ? 'js' : b}-desc`));
            }
        });

        // Update the Language Switch Button Text
        const switchBtnText = document.getElementById('lang-switch-btn-text');
        if (switchBtnText) {
            switchBtnText.textContent = lang === 'en' ? 'বাংলা' : 'English';
        }
    },

    // Get current state from LocalStorage
    getState() {
        const stateStr = localStorage.getItem('eduhtml_state');
        if (!stateStr) {
            this.saveState(this.defaultState);
            return this.defaultState;
        }
        try {
            return JSON.parse(stateStr);
        } catch (e) {
            console.error('Error parsing EduHTML state, resetting state.', e);
            return this.defaultState;
        }
    },

    // Save state to LocalStorage
    saveState(state) {
        localStorage.setItem('eduhtml_state', JSON.stringify(state));
    },

    // Mark a lesson as completed
    completeLesson(lessonId) {
        const state = this.getState();
        if (!state.lessonsCompleted.includes(lessonId)) {
            state.lessonsCompleted.push(lessonId);
            
            // Check if we should unlock "Lesson Champ" badge
            if (state.lessonsCompleted.length >= this.totalLessons && !state.badgesUnlocked.includes('lesson_champ')) {
                state.badgesUnlocked.push('lesson_champ');
            }
            
            // Check if we should unlock "JS Wizard" badge
            if (state.lessonsCompleted.includes('js-basics') && state.lessonsCompleted.includes('js-dom') && !state.badgesUnlocked.includes('js_wizard')) {
                state.badgesUnlocked.push('js_wizard');
            }
            
            this.saveState(state);
            this.updateDashboardUI();
        }
    },

    // Mark quiz as completed
    completeQuiz(score, total) {
        const state = this.getState();
        state.quizzesCompleted = true;
        state.quizScore = Math.max(state.quizScore, score);
        
        // Unlock quiz master badge if they get 100%
        if (score === total && !state.badgesUnlocked.includes('quiz_master')) {
            state.badgesUnlocked.push('quiz_master');
        }
        
        this.saveState(state);
        this.updateDashboardUI();
    },

    // Unlock specific badge
    unlockBadge(badgeId) {
        const state = this.getState();
        if (!state.badgesUnlocked.includes(badgeId)) {
            state.badgesUnlocked.push(badgeId);
            this.saveState(state);
            this.updateDashboardUI();
        }
    },

    // Calculate percentage progress
    calculateProgress() {
        const state = this.getState();
        const lessonWeight = 70; // 70% of total score is lessons
        const quizWeight = 30;   // 30% is passing the quiz

        const lessonProgress = (state.lessonsCompleted.length / this.totalLessons) * lessonWeight;
        const quizProgress = state.quizzesCompleted ? quizWeight : 0;
        
        return Math.round(lessonProgress + quizProgress);
    },

    // Highlight active link in header menu
    highlightNavigation() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        
        const menuItems = document.querySelectorAll('.menu-area li');
        menuItems.forEach(li => {
            const link = li.querySelector('a');
            if (link) {
                const linkHref = link.getAttribute('href');
                if (linkHref === filename) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            }
        });
    },

    // Render stats and progress on the Dashboard index.html
    updateDashboardUI() {
        const progressFill = document.getElementById('dashboard-progress-fill');
        const progressPct = document.getElementById('dashboard-progress-pct');
        const lessonsCount = document.getElementById('completed-lessons-count');
        const quizStatus = document.getElementById('quiz-completion-status');
        const badgeCount = document.getElementById('unlocked-badges-count');
        
        const state = this.getState();
        const overallProgress = this.calculateProgress();

        if (progressFill) progressFill.style.width = `${overallProgress}%`;
        if (progressPct) progressPct.textContent = `${overallProgress}%`;
        if (lessonsCount) lessonsCount.textContent = `${state.lessonsCompleted.length}/${this.totalLessons}`;
        if (badgeCount) badgeCount.textContent = `${state.badgesUnlocked.length}/6`;
        if (quizStatus) {
            quizStatus.textContent = state.quizzesCompleted ? `${this.translate('stat-quiz-completed')} (${state.quizScore}/10)` : this.translate('stat-quiz-uncompleted');
        }

        // Apply visual updates to roadmap step cards
        state.lessonsCompleted.forEach(lessonId => {
            const roadmapCard = document.getElementById(`roadmap-step-${lessonId}`);
            if (roadmapCard) {
                roadmapCard.classList.add('completed');
                roadmapCard.classList.remove('active');
                const badge = roadmapCard.querySelector('.step-badge');
                if (badge) badge.textContent = this.translate('status-completed');
            }
        });

        // Set the NEXT uncompleted lesson as active
        const roadmapSteps = ['tags-basics', 'formatting', 'lists-tables', 'links-images', 'css-basics', 'js-basics', 'js-dom'];
        let activeFound = false;
        for (const step of roadmapSteps) {
            const roadmapCard = document.getElementById(`roadmap-step-${step}`);
            if (roadmapCard && !state.lessonsCompleted.includes(step)) {
                if (!activeFound) {
                    roadmapCard.classList.add('active');
                    const badge = roadmapCard.querySelector('.step-badge');
                    if (badge) badge.textContent = this.translate('status-in-progress');
                    activeFound = true;
                } else {
                    roadmapCard.classList.remove('active', 'completed');
                    const badge = roadmapCard.querySelector('.step-badge');
                    if (badge) badge.textContent = this.translate('status-locked');
                }
            }
        }

        // Highlight quiz roadmap step if lessons completed
        const quizCard = document.getElementById('roadmap-step-quiz');
        if (quizCard) {
            if (state.quizzesCompleted) {
                quizCard.classList.add('completed');
                quizCard.classList.remove('active');
                const badge = quizCard.querySelector('.step-badge');
                if (badge) badge.textContent = this.translate('status-completed');
            } else if (state.lessonsCompleted.length >= this.totalLessons) {
                quizCard.classList.add('active');
                const badge = quizCard.querySelector('.step-badge');
                if (badge) badge.textContent = this.translate('status-ready');
            } else {
                quizCard.classList.remove('active', 'completed');
                const badge = quizCard.querySelector('.step-badge');
                if (badge) badge.textContent = this.translate('status-locked');
            }
        }

        // Unlock badges in badges grid
        state.badgesUnlocked.forEach(badgeId => {
            const badgeEl = document.getElementById(`badge-${badgeId}`);
            if (badgeEl) {
                badgeEl.classList.add('unlocked');
            }
        });
    },

    // Set language switcher button event bindings
    bindLanguageToggle() {
        const langBtn = document.getElementById('lang-switch-btn');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const currentLang = this.getLanguage();
                const nextLang = currentLang === 'en' ? 'bn' : 'en';
                this.setLanguage(nextLang);
            });
        }
    },

    // Initialize application on load
    init() {
        this.highlightNavigation();
        
        // Auto-unlock welcome badge if not already unlocked
        const state = this.getState();
        if (!state.badgesUnlocked.includes('welcome')) {
            this.unlockBadge('welcome');
        }

        this.applyTranslations();
        this.updateDashboardUI();
        this.bindLanguageToggle();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    EduHTML.init();
});
