const translations = {
    en: {
        mad_name: "Madina Amantayeva",
        mad_intro: "intro",
        mad_welcome:"Hi there! I'm Madina, a UX/UI designer",
        mad_description: "I am a dedicated UX/UI designer on a mission to craft engaging, intuitive digital experiences that delight users. As a masters student in &quot;Computer Science and Multimedia&quot; at the University of Pavia, I blend a strong foundation in design principles with a creative, detail-focused approach.", 
    },

    ru: {
        mad_name: "Мадина Амантаева",
        mad_intro: "Интро",
        mad_welcome: "Хэллоу! Я Мадина, UX/UI дизайнер",
        mad_description: "",
    }
};

// Функция для смены языка
function changeLanguage(language) {
    // Получаем переводы для выбранного языка
    const langData = translations[language];

    // Меняем текст по ID элементов
    document.getElementById("mad_name").textContent = langData.mad_name;
    document.getElementById("mad_intro").textContent = langData.mad_intro;

    // // Убираем текущий класс шрифта и добавляем новый
    // document.body.classList.remove('font-en', 'font-ru');
    // document.body.classList.add(`font-${language}`);
}