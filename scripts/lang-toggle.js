function changeLanguage(language) {
    const content = {
        en: {
            heading: "Welcome to my webpage",
            description: "This is a simple webpage with a language toggle feature."
        },
        hi: {
            heading: "मेरे वेबपेज पर स्वागत है",
            description: "यह एक सरल वेबपेज है जिसमें भाषा स्विच करने की सुविधा है।"
        }
    };

    document.getElementById('heading').innerText = content[language].heading;
    document.getElementById('description').innerText = content[language].description;
}
