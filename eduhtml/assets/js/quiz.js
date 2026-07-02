// Bilingual Quiz Engine Logic supporting 10 Questions

const QUIZ_QUESTIONS = [
    {
        en: {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                { text: "<link>", correct: false },
                { text: "<a>", correct: true },
                { text: "<href>", correct: false },
                { text: "<anchor>", correct: false }
            ],
            explanation: "Correct! The <a> (anchor) tag creates a hyperlink, using the 'href' attribute to point to the destination URL."
        },
        bn: {
            question: "কোন এইচটিএমএল ট্যাগ ব্যবহার করে হাইপারলিঙ্ক বা লিংক তৈরি করা হয়?",
            options: [
                { text: "<link>", correct: false },
                { text: "<a>", correct: true },
                { text: "<href>", correct: false },
                { text: "<anchor>", correct: false }
            ],
            explanation: "সঠিক উত্তর! <a> (অ্যাঙ্কর) ট্যাগ দিয়ে হাইপারলিঙ্ক তৈরি করা হয়, যার ভেতর গন্তব্য লিংক নির্দেশ করার জন্য href অ্যাট্রিবিউট ব্যবহার করা হয়।"
        }
    },
    {
        en: {
            question: "Which tag represents a standard line break in HTML?",
            options: [
                { text: "<break>", correct: false },
                { text: "<lb>", correct: false },
                { text: "<br>", correct: true },
                { text: "<hr>", correct: false }
            ],
            explanation: "Correct! The <br> tag inserts a single line break. It is a self-closing empty element."
        },
        bn: {
            question: "এইচটিএমএল-এ লাইনের মাঝে ফাঁকা বা লাইন ব্রেক তৈরি করতে নিচের কোন ট্যাগ ব্যবহার করা হয়?",
            options: [
                { text: "<break>", correct: false },
                { text: "<lb>", correct: false },
                { text: "<br>", correct: true },
                { text: "<hr>", correct: false }
            ],
            explanation: "সঠিক উত্তর! <br> ট্যাগ দিয়ে একটি লাইন ব্রেক তৈরি করা যায় এবং এর কোনো সমাপনী বা ক্লোজিং ট্যাগ লাগে না।"
        }
    },
    {
        en: {
            question: "How do you select an element with the ID 'profile' in a CSS rule?",
            options: [
                { text: ".profile", correct: false },
                { text: "profile", correct: false },
                { text: "#profile", correct: true },
                { text: "*profile", correct: false }
            ],
            explanation: "Correct! In CSS, the hash (#) symbol selects elements by their ID, while the dot (.) selects elements by class."
        },
        bn: {
            question: "সিএসএস-এ 'profile' আইডি (ID) সম্পন্ন এলিমেন্টকে সিলেক্ট করার জন্য কোন সিলেক্টর ব্যবহার করা হয়?",
            options: [
                { text: ".profile", correct: false },
                { text: "profile", correct: false },
                { text: "#profile", correct: true },
                { text: "*profile", correct: false }
            ],
            explanation: "সঠিক উত্তর! সিএসএস সিলেক্টরে আইডি সিলেকশনের জন্য হ্যাশ (#) এবং ক্লাসের জন্য ডট (.) ব্যবহার করা হয়।"
        }
    },
    {
        en: {
            question: "Which tag is used to define an individual item inside a list?",
            options: [
                { text: "<ul>", correct: false },
                { text: "<ol>", correct: false },
                { text: "<li>", correct: true },
                { text: "<list>", correct: false }
            ],
            explanation: "Correct! <li> stands for 'list item' and must be nested inside an ordered (<ol>) or unordered (<ul>) parent."
        },
        bn: {
            question: "এইচটিএমএল লিস্টের প্রতিটি নির্দিষ্ট আইটেমকে নির্দেশ করার জন্য কোন ট্যাগটি ব্যবহার করা হয়?",
            options: [
                { text: "<ul>", correct: false },
                { text: "<ol>", correct: false },
                { text: "<li>", correct: true },
                { text: "<list>", correct: false }
            ],
            explanation: "সঠিক উত্তর! <li> মানে 'List Item'। এটি বুলেট বা নাম্বারিং লিস্টের আইটেম তৈরিতে ওল (<ol>) অথবা ইউএল (<ul>) এর ভেতর ব্যবহার করা হয়।"
        }
    },
    {
        en: {
            question: "What does the abbreviation CSS stand for?",
            options: [
                { text: "Creative Style Sheets", correct: false },
                { text: "Computer Style Sheets", correct: false },
                { text: "Cascading Style Sheets", correct: true },
                { text: "Colorful Style Sheets", correct: false }
            ],
            explanation: "Correct! CSS stands for Cascading Style Sheets, describing how HTML elements are styled and laid out."
        },
        bn: {
            question: "CSS এর পূর্ণরূপ বা অর্থ কী?",
            options: [
                { text: "ক্রিয়েটিভ স্টাইল শিটস", correct: false },
                { text: "কম্পিউটার স্টাইল শিটস", correct: false },
                { text: "ক্যাসকেডিং স্টাইল শিটস", correct: true },
                { text: "কালারফুল স্টাইল শিটস", correct: false }
            ],
            explanation: "সঠিক উত্তর! CSS এর মানে ক্যাসকেডিং স্টাইল শিটস, যা এইচটিএমএল পেজের ডিজাইনিং এবং লেআউট নিয়ন্ত্রণ করে।"
        }
    },
    {
        en: {
            question: "Which JS keyword is used to declare a variable that CANNOT be reassigned?",
            options: [
                { text: "let", correct: false },
                { text: "var", correct: false },
                { text: "const", correct: true },
                { text: "static", correct: false }
            ],
            explanation: "Correct! Variables declared with const (constant) are read-only and cannot be reassigned."
        },
        bn: {
            question: "জাভাস্ক্রিপ্টে ধ্রুবক বা এমন ভেরিয়েবল ঘোষণার জন্য কোন কিওয়ার্ডটি ব্যবহৃত হয় যার মান পুনরায় পরিবর্তন করা যায় না?",
            options: [
                { text: "let", correct: false },
                { text: "var", correct: false },
                { text: "const", correct: true },
                { text: "static", correct: false }
            ],
            explanation: "সঠিক উত্তর! const (কনস্ট্যান্ট) কিওয়ার্ড দিয়ে ঘোষিত ভেরিয়েবলের মান শুধুমাত্র একবার দেওয়া যায় এবং তা পরবর্তীতে বদলানো যায় না।"
        }
    },
    {
        en: {
            question: "Which function is used to write log statements to the developer tools console?",
            options: [
                { text: "console.write()", correct: false },
                { text: "console.log()", correct: true },
                { text: "print()", correct: false },
                { text: "window.log()", correct: false }
            ],
            explanation: "Correct! console.log() outputs details to the browser developer console, useful for troubleshooting."
        },
        bn: {
            question: "ব্রাউজারের ডেভেলপার টুলস কনসোলে আউটপুট প্রিন্ট বা লগ করতে কোন ফাংশনটি ব্যবহৃত হয়?",
            options: [
                { text: "console.write()", correct: false },
                { text: "console.log()", correct: true },
                { text: "print()", correct: false },
                { text: "window.log()", correct: false }
            ],
            explanation: "সঠিক উত্তর! console.log() মেথড ব্যবহার করে কনসোল বক্সে যেকোনো বার্তা বা মান প্রদর্শন করা যায়।"
        }
    },
    {
        en: {
            question: "Which DOM method is used to select an element by its ID attribute?",
            options: [
                { text: "document.selectById()", correct: false },
                { text: "document.getElementById()", correct: true },
                { text: "document.querySelectorID()", correct: false },
                { text: "document.find()", correct: false }
            ],
            explanation: "Correct! document.getElementById() retrieves the single DOM element matching the ID value."
        },
        bn: {
            question: "এইচটিএমএল ডকুমেন্টের নির্দিষ্ট আইডি (ID) এর উপাদান সিলেক্ট করার জন্য কোন ডম (DOM) মেথড ব্যবহার করা হয়?",
            options: [
                { text: "document.selectById()", correct: false },
                { text: "document.getElementById()", correct: true },
                { text: "document.querySelectorID()", correct: false },
                { text: "document.find()", correct: false }
            ],
            explanation: "সঠিক উত্তর! document.getElementById() আইডি ধরে এলিমেন্ট সিলেকশনের জন্য ব্যবহৃত ডম মেথড।"
        }
    },
    {
        en: {
            question: "Which event name is used to execute code when a user clicks a button?",
            options: [
                { text: "click", correct: true },
                { text: "onclick", correct: false },
                { text: "tap", correct: false },
                { text: "hover", correct: false }
            ],
            explanation: "Correct! When using addEventListener, the standard event string is 'click'."
        },
        bn: {
            question: "অ্যাড-ইভেন্ট-লিসেনারে বাটন প্রেস করার ঘটনা ট্র্যাকিং-এর জন্য কোন ইভেন্ট নামটি ব্যবহার করা হয়?",
            options: [
                { text: "click", correct: true },
                { text: "onclick", correct: false },
                { text: "tap", correct: false },
                { text: "hover", correct: false }
            ],
            explanation: "সঠিক উত্তর! addEventListener মেথডে ক্লিক করার অ্যাকশন ধরার জন্য ইভেন্টের স্ট্যান্ডার্ড নাম হল 'click'।"
        }
    },
    {
        en: {
            question: "Where is the best practice location to load external JS files for page rendering speed?",
            options: [
                { text: "At the top of the <head>", correct: false },
                { text: "At the bottom of the <body>", correct: true },
                { text: "Inside the <title>", correct: false },
                { text: "Before the <html> tag", correct: false }
            ],
            explanation: "Correct! Loading scripts at the very bottom of the <body> prevents render-blocking and ensures elements exist before JS runs."
        },
        bn: {
            question: "ওয়েব পেজের লোডিং স্পিড বাড়ানোর জন্য এক্সটার্নাল জাভাস্ক্রিপ্ট ফাইল লোড করার সবচেয়ে সেরা স্থান কোনটি?",
            options: [
                { text: "<head> ট্যাগের ওপরে", correct: false },
                { text: "<body> ট্যাগের একদম নিচে", correct: true },
                { text: "<title> ট্যাগের ভেতর", correct: false },
                { text: "<html> ট্যাগের পূর্বে", correct: false }
            ],
            explanation: "সঠিক উত্তর! <body> ট্যাগের একদম শেষে জাভাস্ক্রিপ্ট ফাইল লোড করলে ব্রাউজার প্রথমে সম্পূর্ণ পেজ লোড করে ফেলে, ফলে পেজের লোডিং বাধাগ্রস্ত হয় না।"
        }
    }
];

const COMPONENT_TEXTS = {
    en: {
        counterPrefix: "Question",
        counterMid: "of",
        btnSubmit: "Submit Answer",
        btnNext: "Next Question ➡️",
        btnFinish: "Finish Quiz 🏆",
        incorrect: "❌ Incorrect.",
        scoreHeadlinePerfect: "Perfect Score! 🎓",
        scoreHeadlinePassed: "Quiz Passed! 🎖️",
        scoreHeadlineFailed: "Keep Studying! 📚",
        scoreDescPerfect: "Incredible! You got a perfect 10/10! You have unlocked the \"Quiz Master\" title and badge.",
        scoreDescPassed: "Good job! You scored {score}/10. You have completed the requirements to pass this quiz challenge. Retry to get a perfect score and unlock the Quiz Master badge!",
        scoreDescFailed: "You scored {score}/10. Go back to the lessons to study the concepts and try again to pass."
    },
    bn: {
        counterPrefix: "প্রশ্ন নং",
        counterMid: "মোট",
        btnSubmit: "উত্তর সাবমিট করো",
        btnNext: "পরবর্তী প্রশ্ন ➡️",
        btnFinish: "কুইজ শেষ করো 🏆",
        incorrect: "❌ ভুল উত্তর।",
        scoreHeadlinePerfect: "নিখুঁত স্কোর! 🎓",
        scoreHeadlinePassed: "কুইজ পাস! 🎖️",
        scoreHeadlineFailed: "আরো পড়াশোনা করুন! 📚",
        scoreDescPerfect: "অসাধারণ! আপনি ১০/১০ পেয়েছেন! আপনি \"কুইজ মাস্টার\" খেতাব এবং ব্যাজটি আনলক করেছেন।",
        scoreDescPassed: "চমৎকার! আপনি {score}/১০ পেয়েছেন। আপনি কুইজে উত্তীর্ণ হয়েছেন। ১০/১০ স্কোর এবং কুইজ মাস্টার ব্যাজ আনলক করতে পুনরায় চেষ্টা করতে পারেন!",
        scoreDescFailed: "আপনি {score}/১০ পেয়েছেন। কুইজে উত্তীর্ণ হতে এবং ব্যাজ অর্জন করতে লেসনগুলো আবার পড়ে পুনরায় চেষ্টা করুন।"
    }
};

let currentIndex = 0;
let score = 0;
let selectedOption = null;
let currentPhase = 'answering'; // 'answering' or 'answered'

function loadQuestion() {
    const questionWrapper = QUIZ_QUESTIONS[currentIndex];
    const lang = typeof EduHTML !== 'undefined' ? EduHTML.getLanguage() : 'en';
    const question = questionWrapper[lang];
    const dict = COMPONENT_TEXTS[lang];

    // Update Question text & progress counter
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-counter').textContent = `${dict.counterPrefix} ${currentIndex + 1} ${dict.counterMid} ${QUIZ_QUESTIONS.length}`;
    
    // Progress fill percentage
    const progressFill = document.getElementById('quiz-progress');
    const pct = ((currentIndex) / QUIZ_QUESTIONS.length) * 100;
    progressFill.style.width = `${pct}%`;

    // Render Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.style.display = 'none';

    question.options.forEach((opt, idx) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'quiz-option';
        
        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        
        optionEl.innerHTML = `
            <div class="quiz-option-letter">${letter}</div>
            <div class="quiz-option-text">${opt.text}</div>
        `;
        
        optionEl.onclick = () => selectOption(opt, optionEl);
        optionsContainer.appendChild(optionEl);
    });

    // Reset button states
    selectedOption = null;
    currentPhase = 'answering';
    const actionBtn = document.getElementById('action-btn');
    actionBtn.textContent = dict.btnSubmit;
    actionBtn.disabled = true;
}

function selectOption(option, element) {
    if (currentPhase !== 'answering') return;

    selectedOption = option;

    // Highlight selected card visually
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    // Enable Action Button
    document.getElementById('action-btn').disabled = false;
}

function submitAnswer() {
    const questionWrapper = QUIZ_QUESTIONS[currentIndex];
    const lang = typeof EduHTML !== 'undefined' ? EduHTML.getLanguage() : 'en';
    const question = questionWrapper[lang];
    const dict = COMPONENT_TEXTS[lang];

    const explanationBox = document.getElementById('explanation-box');
    const options = document.querySelectorAll('.quiz-option');
    const actionBtn = document.getElementById('action-btn');

    currentPhase = 'answered';

    // Loop options to show corrections
    options.forEach(optionEl => {
        optionEl.style.pointerEvents = 'none';
        const textNode = optionEl.querySelector('.quiz-option-text').textContent;
        const matchingOpt = question.options.find(o => o.text === textNode);

        if (matchingOpt.correct) {
            optionEl.style.borderColor = 'var(--success)';
            optionEl.style.background = 'rgba(16, 185, 129, 0.1)';
        } else if (selectedOption.text === textNode && !selectedOption.correct) {
            optionEl.style.borderColor = 'var(--error)';
            optionEl.style.background = 'rgba(239, 68, 68, 0.1)';
        }
    });

    // Show detailed explanation block
    explanationBox.style.display = 'block';

    if (selectedOption.correct) {
        score++;
        explanationBox.className = 'explanation-box correct';
        explanationBox.innerHTML = `✅ ${question.explanation}`;
    } else {
        explanationBox.className = 'explanation-box incorrect';
        explanationBox.innerHTML = `${dict.incorrect}<br><br>${question.explanation}`;
    }

    // Change action button wording
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
        actionBtn.textContent = dict.btnNext;
    } else {
        actionBtn.textContent = dict.btnFinish;
    }
}

function nextStep() {
    if (currentPhase === 'answering') {
        submitAnswer();
    } else {
        if (currentIndex < QUIZ_QUESTIONS.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('quiz-progress').style.width = '100%';

    const lang = typeof EduHTML !== 'undefined' ? EduHTML.getLanguage() : 'en';
    const dict = COMPONENT_TEXTS[lang];

    const resultsBox = document.getElementById('results-box');
    const scoreCircle = document.getElementById('score-circle');
    const headline = document.getElementById('results-headline');
    const paragraph = document.getElementById('results-paragraph');

    scoreCircle.textContent = `${score}/${QUIZ_QUESTIONS.length}`;
    resultsBox.style.display = 'block';

    if (score === QUIZ_QUESTIONS.length) {
        headline.textContent = dict.scoreHeadlinePerfect;
        paragraph.textContent = dict.scoreDescPerfect;
    } else if (score >= 7) {
        headline.textContent = dict.scoreHeadlinePassed;
        paragraph.textContent = dict.scoreDescPassed.replace('{score}', score);
    } else {
        headline.textContent = dict.scoreHeadlineFailed;
        paragraph.textContent = dict.scoreDescFailed.replace('{score}', score);
    }

    // Bind Badge Claim button
    const claimBtn = document.getElementById('claim-badge-btn');
    claimBtn.onclick = () => {
        if (typeof EduHTML !== 'undefined') {
            EduHTML.completeQuiz(score, QUIZ_QUESTIONS.length);
        }
        window.location.href = 'index.html';
    };
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    document.getElementById('quiz-box').style.display = 'block';
    document.getElementById('results-box').style.display = 'none';
    loadQuestion();
}

// Language change event subscription
window.onLanguageChange = function() {
    loadQuestion();
};

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById('action-btn').addEventListener('click', nextStep);
});
