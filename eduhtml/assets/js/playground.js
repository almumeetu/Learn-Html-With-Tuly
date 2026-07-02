// Editor Playground Handler with CodeMirror Highlighting

const TEMPLATES = {
    empty: {
        html: `<h1>My First Playground Page</h1>\n<p>This is where you can write anything using HTML tags!</p>`,
        css: `body {\n  font-family: sans-serif;\n  padding: 30px;\n  background-color: #fdfdfd;\n  color: #333;\n}\n\nh1 {\n  color: #6366f1;\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n}`,
        js: `console.log("Blank page loaded!");`
    },
    bio: {
        html: `<div class="bio-card">\n  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Avatar">\n  <h2>Afshana Tuly</h2>\n  <p class="role">Web Design Student</p>\n  <p class="desc">I am learning how to create beautiful websites using HTML and CSS. Nice to meet you!</p>\n  <a href="https://www.w3schools.com" target="_blank" class="contact-btn">Visit W3Schools</a>\n</div>`,
        css: `body {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background: linear-gradient(135deg, #e0e7ff, #fdf2f8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.bio-card {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  max-width: 320px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n\n.bio-card img {\n  border-radius: 50%;\n  border: 4px solid #6366f1;\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-bottom: 15px;\n}\n\n.bio-card h2 {\n  margin: 5px 0;\n  color: #1e293b;\n  font-size: 1.5rem;\n}\n\n.bio-card .role {\n  color: #6366f1;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\n.bio-card .desc {\n  color: #64748b;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\n.contact-btn {\n  display: inline-block;\n  background-color: #6366f1;\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n\n.contact-btn:hover {\n  background-color: #4f46e5;\n  transform: translateY(-2px);\n}`,
        js: `console.log("Bio card template loaded!");`
    },
    button: {
        html: `<div class="center-box">\n  <button id="glow-btn">Hover & Click Me!</button>\n</div>`,
        css: `body {\n  background: #0f172a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\nbutton {\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  border: none;\n  color: white;\n  padding: 15px 30px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  border-radius: 50px;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);\n  transition: all 0.3s ease;\n}\n\nbutton:hover {\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: 0 0 25px rgba(236, 72, 153, 0.6);\n}`,
        js: `const btn = document.getElementById("glow-btn");\n\nbtn.addEventListener("click", () => {\n  alert("Hello from JavaScript! Event Listener Triggered.");\n});`
    },
    flexbox: {
        html: `<div class="gallery">\n  <div class="item card-1">\n    <h3>Item 1</h3>\n    <p>Flex Box Element</p>\n  </div>\n  <div class="item card-2">\n    <h3>Item 2</h3>\n    <p>Flex Box Element</p>\n  </div>\n  <div class="item card-3">\n    <h3>Item 3</h3>\n    <p>Flex Box Element</p>\n  </div>\n</div>`,
        css: `body {\n  font-family: sans-serif;\n  background: #f8fafc;\n  padding: 40px 20px;\n}\n\n.gallery {\n  display: flex;\n  gap: 20px;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1;\n  min-width: 200px;\n  color: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n  transition: transform 0.2s;\n}\n\n.item:hover {\n  transform: scale(1.03);\n}\n\n.card-1 { background: #6366f1; }\n.card-2 { background: #ec4899; }\n.card-3 { background: #10b981; }`,
        js: `console.log("Flexbox grid template loaded!");`
    },
    colorswitcher: {
        html: `<div class="card">\n  <h2>Color Switcher</h2>\n  <button id="bg-btn">Change Page Color</button>\n  <p id="color-label">Color: #f1f5f9</p>\n</div>`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  background-color: #f1f5f9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  transition: background 0.4s ease;\n}\n\n.card {\n  background: white;\n  padding: 40px 30px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.08);\n  text-align: center;\n}\n\nh2 {\n  margin-bottom: 20px;\n  color: #1e293b;\n}\n\nbutton {\n  background: #6366f1;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\nbutton:hover {\n  background: #4f46e5;\n}\n\n#color-label {\n  margin-top: 15px;\n  font-size: 0.9rem;\n  color: #64748b;\n  font-family: monospace;\n}`,
        js: `const btn = document.getElementById("bg-btn");\nconst label = document.getElementById("color-label");\nconst colors = ["#f87171", "#fb923c", "#fbbf24", "#34d399", "#2dd4bf", "#38bdf8", "#818cf8", "#c084fc", "#f472b6"];\n\nbtn.addEventListener("click", function() {\n  const index = Math.floor(Math.random() * colors.length);\n  const newColor = colors[index];\n  document.body.style.backgroundColor = newColor;\n  label.textContent = "Color: " + newColor;\n});`
    },
    counter: {
        html: `<div class="box">\n  <h3>Interactive Click Counter</h3>\n  <div id="count-number">0</div>\n  <div style="display:flex; justify-content:center; gap:10px;">\n    <button id="minus-btn">Subtract</button>\n    <button id="plus-btn">Add</button>\n  </div>\n</div>`,
        css: `body {\n  font-family: sans-serif;\n  background: #f1f5f9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.box {\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.06);\n  text-align: center;\n  min-width: 280px;\n}\n\n#count-number {\n  font-size: 4.5rem;\n  font-weight: bold;\n  color: #3b82f6;\n  margin: 15px 0;\n}\n\nbutton {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: opacity 0.15s;\n}\n\nbutton:hover {\n  opacity: 0.9;\n}\n\n#minus-btn {\n  background: #ef4444;\n}`,
        js: `let counter = 0;\nconst display = document.getElementById("count-number");\nconst minus = document.getElementById("minus-btn");\nconst plus = document.getElementById("plus-btn");\n\nminus.addEventListener("click", () => {\n  counter--;\n  display.textContent = counter;\n});\n\nplus.addEventListener("click", () => {\n  counter++;\n  display.textContent = counter;\n});`
    }
};

let htmlEditor, cssEditor, jsEditor;

// Switch active text editor view
function switchTab(type) {
    const htmlTab = document.getElementById('html-tab');
    const cssTab = document.getElementById('css-tab');
    const jsTab = document.getElementById('js-tab');
    const htmlPane = document.getElementById('html-pane');
    const cssPane = document.getElementById('css-pane');
    const jsPane = document.getElementById('js-pane');

    // Remove active styles
    htmlTab.classList.remove('active');
    cssTab.classList.remove('active');
    jsTab.classList.remove('active');
    htmlPane.classList.remove('active');
    cssPane.classList.remove('active');
    jsPane.classList.remove('active');

    if (type === 'html') {
        htmlTab.classList.add('active');
        htmlPane.classList.add('active');
        if (htmlEditor) htmlEditor.refresh();
    } else if (type === 'css') {
        cssTab.classList.add('active');
        cssPane.classList.add('active');
        if (cssEditor) cssEditor.refresh();
    } else {
        jsTab.classList.add('active');
        jsPane.classList.add('active');
        if (jsEditor) jsEditor.refresh();
    }
}

// Load code from a pre-made template
function loadTemplate(templateKey) {
    const template = TEMPLATES[templateKey];
    if (!template) return;

    if (htmlEditor) htmlEditor.setValue(template.html);
    if (cssEditor) cssEditor.setValue(template.css);
    if (jsEditor) jsEditor.setValue(template.js || '');
    
    updatePreview();
    saveSandboxData();
}

// Insert tag markup at editor cursor position
function insertTag(openTag, closeTag) {
    const activeType = document.querySelector('.tab-btn.active').id.replace('-tab', '');
    let editor;
    if (activeType === 'html') editor = htmlEditor;
    else if (activeType === 'css') editor = cssEditor;
    else editor = jsEditor;

    if (!editor) return;

    const doc = editor.getDoc();
    const cursor = doc.getCursor();
    const selection = doc.getSelection();
    
    const replacement = openTag + selection + closeTag;
    doc.replaceSelection(replacement);
    
    editor.focus();
    if (closeTag.length > 0) {
        doc.setCursor({ line: cursor.line, ch: cursor.ch + openTag.length });
    }
    
    updatePreview();
    saveSandboxData();
}

// Render HTML + CSS + JS inside iframe
function updatePreview() {
    if (!htmlEditor || !cssEditor || !jsEditor) return;

    const htmlCode = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const jsCode = jsEditor.getValue();
    const iframe = document.getElementById('preview-iframe');

    if (!iframe) return;

    // Combine source and inject safety wrappers for user JS logic
    const combinedSource = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>
                try {
                    ${jsCode}
                } catch (err) {
                    console.error("Preview JS Exception: ", err);
                }
            </script>
        </body>
        </html>
    `;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(combinedSource);
    iframeDoc.close();

    if (typeof EduHTML !== 'undefined') {
        EduHTML.unlockBadge('code_ninja');
    }
}

// Save current codes to localStorage
function saveSandboxData() {
    if (!htmlEditor || !cssEditor || !jsEditor) return;

    localStorage.setItem('eduhtml_sandbox_html', htmlEditor.getValue());
    localStorage.setItem('eduhtml_sandbox_css', cssEditor.getValue());
    localStorage.setItem('eduhtml_sandbox_js', jsEditor.getValue());
}

// Load saved codes from localStorage
function loadSandboxData() {
    const savedHtml = localStorage.getItem('eduhtml_sandbox_html');
    const savedCss = localStorage.getItem('eduhtml_sandbox_css');
    const savedJs = localStorage.getItem('eduhtml_sandbox_js');

    if (savedHtml !== null && savedCss !== null && savedJs !== null) {
        if (htmlEditor) htmlEditor.setValue(savedHtml);
        if (cssEditor) cssEditor.setValue(savedCss);
        if (jsEditor) jsEditor.setValue(savedJs);
    } else {
        loadTemplate('colorswitcher');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize CodeMirror wrappers
    htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
        mode: 'htmlmixed',
        theme: 'material-ocean',
        lineNumbers: true,
        tabSize: 2,
        lineWrapping: true
    });

    cssEditor = CodeMirror.fromTextArea(document.getElementById('css-code'), {
        mode: 'css',
        theme: 'material-ocean',
        lineNumbers: true,
        tabSize: 2,
        lineWrapping: true
    });

    jsEditor = CodeMirror.fromTextArea(document.getElementById('js-code'), {
        mode: 'javascript',
        theme: 'material-ocean',
        lineNumbers: true,
        tabSize: 2,
        lineWrapping: true
    });

    // 2. Load stored code
    loadSandboxData();
    updatePreview();

    // 3. Attach listeners for realtime updates
    htmlEditor.on('change', () => {
        updatePreview();
        saveSandboxData();
    });
    
    cssEditor.on('change', () => {
        updatePreview();
        saveSandboxData();
    });

    jsEditor.on('change', () => {
        updatePreview();
        saveSandboxData();
    });

    document.getElementById('run-btn').addEventListener('click', () => {
        updatePreview();
        
        const runBtn = document.getElementById('run-btn');
        const origText = runBtn.textContent;
        const currentLang = typeof EduHTML !== 'undefined' ? EduHTML.getLanguage() : 'en';
        runBtn.textContent = currentLang === 'en' ? 'Rendered! ✓' : 'রান সফল! ✓';
        setTimeout(() => {
            runBtn.textContent = typeof EduHTML !== 'undefined' ? EduHTML.translate('btn-playground-render') : origText;
        }, 1200);
    });

    // Force rendering sizes refresh
    setTimeout(() => {
        if (htmlEditor) htmlEditor.refresh();
    }, 200);
});
