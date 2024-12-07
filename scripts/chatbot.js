// Elements
const chatbotButton = document.getElementById('chatbot');
const chatWindow = document.getElementById('chat-window');
const closeChatButton = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('chat-options');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// Open Chat
chatbotButton.addEventListener('click', () => {
    chatWindow.style.display = 'block';
});

// Close Chat
closeChatButton.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Greetings Based on Time
const greetUser = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting = 'Hello!';

    if (hours < 12) greeting = 'Good Morning!';
    else if (hours < 18) greeting = 'Good Afternoon!';
    else greeting = 'Good Evening!';

    chatMessages.innerHTML += `<div class="bot-message">${greeting} Please select your language:</div>`;
};

greetUser();

// Handle Language Selection
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-option')) {
        const lang = e.target.getAttribute('data-lang');
        chatMessages.innerHTML += `<div class="user-message">Selected: ${lang}</div>`;
        optionsContainer.style.display = 'none';
        displayMainOptions(lang);
    }
});

// Display Main Options
const displayMainOptions = (lang) => {
    const options = lang === 'marathi' 
        ? ['उत्पादनाबद्दल', 'संपर्क', 'इतर']
        : lang === 'hindi'
        ? ['उत्पाद के बारे में', 'संपर्क करें', 'अन्य']
        : ['About Product', 'Contact', 'Others'];

    optionsContainer.innerHTML = options.map(
        (opt, index) => `<button class="btn-option" data-option="${index}" data-lang="${lang}">${opt}</button>`
    ).join('');

    // Add the Start Over button next to options
    optionsContainer.innerHTML += `
        <button id="start-over" class="btn-option reset-btn">Start Over</button>
    `;
    optionsContainer.style.display = 'block';
};

// Handle Selected Option
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-option') && e.target.id !== 'start-over') {
        const option = e.target.getAttribute('data-option');
        const lang = e.target.getAttribute('data-lang');
        
        handleChatOption(option, lang);
    } else if (e.target.id === 'start-over') {
        startOver();
    }
});

// Handle Chat Option Selection
const handleChatOption = (option, lang) => {
    let response = '';

    // Clear previous responses when a new option is selected
    chatMessages.innerHTML = '';

    if (lang === 'marathi') {
        if (option === '0') {
            response = `
                <p><strong>उत्पादनाबद्दल:</strong></p>
                <p>गॉबारशक्ती एक पर्यावरणपूरक उत्पादन आहे, जे जैविक ऊर्जेच्या क्षेत्रात क्रांती आणत आहे. या उत्पादनाबद्दल अधिक माहिती मिळवण्यासाठी कृपया आमच्याशी संपर्क साधा.</p>`;
        } else if (option === '1') {
            response = `
                <p><strong>संपर्क करा:</strong></p>
                <p>आपण आम्हाला ईमेलवर संपर्क साधू शकता: <a href="mailto:support@gobarshakti.com">support@gobarshakti.com</a>, किंवा <a href="https://gobarshakti.com/contact">संपर्क पृष्ठावर</a भेट द्या.</p>`;
        } else if (option === '2') {
            response = `
                <p><strong>इतर:</strong></p>
                <p>
                    1. <strong>पासवर्ड रीसेट:</strong> कृपया ईमेलवर माहिती पाठवा आणि आम्ही आपला पासवर्ड रीसेट करू.<br>
                    2. <strong>सामान्य प्रश्न:</strong> आपल्याला अन्य कोणतेही प्रश्न असल्यास, <a href="https://gobarshakti.com/contact">संपर्क फॉर्म</a> किंवा <a href="mailto:support@gobarshakti.com">ईमेल</a> वापरू शकता.
                </p>`;
        }
    } else if (lang === 'hindi') {
        if (option === '0') {
            response = `
                <p><strong>उत्पाद के बारे में:</strong></p>
                <p>GOBARShakti एक पर्यावरण मित्र उत्पाद है जो जैविक ऊर्जा के क्षेत्र में क्रांति लाने के लिए तैयार है। यदि आप इसके बारे में अधिक जानना चाहते हैं, तो कृपया हमसे संपर्क करें!</p>`;
        } else if (option === '1') {
            response = `
                <p><strong>संपर्क करें:</strong></p>
                <p>आप हमसे ईमेल पर संपर्क कर सकते हैं: <a href="mailto:support@gobarshakti.com">support@gobarshakti.com</a>, या हमारी <a href="https://gobarshakti.com/contact">संपर्क पृष्ठ</a> पर जा सकते हैं।</p>`;
        } else if (option === '2') {
            response = `
                <p><strong>अन्य:</strong></p>
                <p>
                    1. <strong>पासवर्ड रीसेट:</strong> कृपया अपने विवरण के साथ हमें ईमेल भेजें और हम आपका पासवर्ड रीसेट कर देंगे।<br>
                    2. <strong>सामान्य प्रश्न:</strong> अन्य किसी भी सवाल के लिए, कृपया <a href="https://gobarshakti.com/contact">संपर्क फॉर्म</a> या <a href="mailto:support@gobarshakti.com">ईमेल</a> के माध्यम से हमसे संपर्क करें।
                </p>`;
        }
    } else {
        if (option === '0') {
            response = `
                <p><strong>About Product:</strong></p>
                <p>GOBARShakti is an eco-friendly product aimed at revolutionizing the field of organic energy. If you'd like to learn more about it, please reach out to us!</p>`;
        } else if (option === '1') {
            response = `
                <p><strong>Contact Us:</strong></p>
                <p>You can reach us via email at <a href="mailto:support@gobarshakti.com">support@gobarshakti.com</a>, or visit our <a href="https://gobarshakti.com/contact">Contact Page</a>.</p>`;
        } else if (option === '2') {
            response = `
                <p><strong>Other Queries:</strong></p>
                <p>
                    1. <strong>Password Reset:</strong> Please send an email with your details to reset your password.<br>
                    2. <strong>General Questions:</strong> For other queries, feel free to use the <a href="https://gobarshakti.com/contact">Contact Form</a> or email us at <a href="mailto:support@gobarshakti.com">support@gobarshakti.com</a>.
                </p>`;
        }
    }

    // Add the response below the buttons
    chatMessages.innerHTML += `<div class="bot-message">${response}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Start Over Function
const startOver = () => {
    // Clear messages
    chatMessages.innerHTML = '';
    
    // Reset options
    optionsContainer.innerHTML = `
        <button class="btn-option" data-lang="marathi">Marathi</button>
        <button class="btn-option" data-lang="english">English</button>
        <button class="btn-option" data-lang="hindi">Hindi</button>
        <button id="start-over" class="btn-option reset-btn">Start Over</button>
    `;

    // Show greeting again
    greetUser();
};
