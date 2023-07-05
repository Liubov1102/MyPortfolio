const langArr = {
  header1: {
    en: "Home",
    uk: "Головна",
    ru: "Главная",
  },
  header2: {
    en: "Projects",
    uk: "Проекти",
    ru: "Проекты",
  },
  header3: {
    en: "About me",
    uk: "Про мене",
    ru: "Обо мне",
  },
  header4: {
    en: "Contacts",
    uk: "Контакти",
    ru: "Контакты",
  },
  "hero-1": {
    en: "Hello ",
    uk: "Привіт, ",
    ru: "Привет, ",
  },
  "hero-2": {
    en: "I’m Liubov Zadoiko",
    uk: "я Любов Задойко,",
    ru: "я Любовь Задойко,",
  },
  // "hero-3": {
  //   en: "FrontEnd Developer",
  //   uk: "FrontEnd Developer",
  //   ru: "FrontEnd Developer",
  // },
  "hero-4": {
    en: "with passion for learning and creating",
    uk: "з пристрастю до навчання та творчості",
    ru: "со страстью к обучению и творчеству",
  },
  "hero-5": {
    en: "“It’s really hard to design products by focus groups. A lot of times, people don’t know what they want until you show it to them.”",
    uk: "«Створювати продукт, спираючись на фокус-групи, по-справжньому важко. Найчастіше люди не розуміють, що їм насправді потрібно, доки сам їм цього не покажеш.»",
    ru: "«Создавать продукт, опираясь на фокус-группы, по-настоящему трудно. Чаще всего люди не понимают, что им на самом деле нужно, пока сам им этого не покажешь.»",
  },
  "hero-6": {
    en: "Steve Jobs",
    uk: "Стів Джобс",
    ru: "Стив Джобс",
  },
  "hero-7": {
    en: "“The only way to do great work is to love what you do.”",
    uk: "«Єдиний спосіб робити чудову роботу - це любити те, що ви робите.»",
    ru: "«Единственный способ делать отличную работу - это любить то, что вы делаете.»",
  },
  projects: {
    en: "Projects",
    uk: "Проекти",
    ru: "Проекты",
  },
  about: {
    en: "About me",
    uk: "Про мене",
    ru: "Обо мне",
  },
  "soft-skills": {
    en: "Communicative, Diligent, Attentive, Effective listening skills, Eager to learn, Ability to work efficiently both individually and in a team and Good sense of humour",
    uk: "Комунікабельна, працьовита, уважна, вмію слухати, прагну до навчання, здатна ефективно працювати як індивідуально, так і у команді, та з гарним почуттям гумору",
    ru: "Коммуникабельна, трудолюбива, внимательна, умею слушать, стремлюсь к обучению, способна эффективно работать как индивидуально, так и в команде, и с хорошим чувством юмора",
  },

  contacts: {
    en: "Contacts",
    uk: "Контакти",
    ru: "Контакты",
  },
  "about-me": {
    en: "It is important for me to grow as a FrontEnd Developer and apply my knowledge in practice. The best reward is seeing the created project work perfectly! I am communicative, responsible, I know how to “google” and find solutions, I have experience in applying the Scrum methodology in teamwork, and I am ready to solve any tasks qualitatively and on time.",
    uk: "Для мене важливо зростати як FrontEnd Developer та застосовувати на практиці свої знання. Найкраща нагорода - це бачити, що створений проект чудово працює! Я комунікабельна, відповідальна, вмію “гуглити” і знаходити рішення, маю досвід застосування методології Scrum при командній роботі, та готова вирішувати будь-які завдання якісно та в строк.",
    ru: "Для меня важно расти как FrontEnd Developer и применять на практике свои знания. Лучшая награда – это видеть, что созданный проект прекрасно работает! Я коммуникабельна, ответственна, умею “гуглить” и находить решения, имею опыт применения методологии Scrum при командной работе и готова решать любые задачи качественно и в срок.",
  },
  "project-1": {
    en: "Team project. Wallet app to control spending. Using Full-stack: React.JS, Node.JS, styled-components, theme.",
    uk: "Командний проект. Додаток Wallet для контролю витрат. Використано Full-stack: React.JS, Node.JS, styled-components, theme.",
    ru: "Командный проект. Приложение-кошелек для контроля расходов. Использовано Full-stack: React.JS, Node.JS, styled-components, theme.",
  },
  "project-2": {
    en: "Team project. Adaptive version of website of finding movies for watching and saving to personal library. Using HTML5, SASS, JS, REST API, Parcel.",
    uk: "Командний проект. Адаптивна версія сайту пошуку фільмів для перегляду та збереження в особистій бібліотеці. Використано HTML5, SASS, JS, REST API, Parcel.",
    ru: "Командный проект. Адаптивная версия сайта поиска фильмов для просмотра и сохранения в личную библиотеку. Использовано HTML5, SASS, JS, REST API, Parcel.",
  },
  "project-3": {
    en: "An example of a «phonebook» with registration and a login account. This application was written in React.JS using ReduxToolkit.",
    uk: "Приклад «телефонної книги» з реєстрацією та обліковим записом для входу. Цей застосунок було написано на React.JS з використанням ReduxToolkit.",
    ru: "Пример «телефонной книги» с регистрацией и учетной записью для входа. Это приложение было написано на React.JS с использованием ReduxToolkit.",
  },
  "project-4": {
    en: "Team project. Adaptive version of landing website. Using HTML5, SASS, JS and Parcel.",
    uk: "Командний проект. Адаптивна версія лендінгу. Використано HTML5, SASS, JS та Parcel.",
    ru: "Командный проект. Адаптивная версия лендинга. Использовано HTML5, SASS, JS и Parcel.",
  },
  "project-5": {
    en: "Adaptive version of landing website. Using HTML5, SASS, JS.",
    uk: "Адаптивна версія лендінгу. Використано HTML5, SASS, JS.",
    ru: "Адаптивная версия лендинга. Использовано HTML5, SASS, JS.",
  },
  "project-6": {
    en: "Adaptive version of multipage website. Using HTML5, SASS, JS.",
    uk: "Адаптивна версія багатосторінкового сайту. Використано HTML5, SASS, JS.",
    ru: "Адаптивная версия многостраничного сайта. Использовано HTML5, SASS, JS.",
  },
  "mobile-1": {
    en: "Home",
    uk: "Головна",
    ru: "Главная",
  },
  "mobile-2": {
    en: "Projects",
    uk: "Проекти",
    ru: "Проекты",
  },
  "mobile-3": {
    en: "About me",
    uk: "Про мене",
    ru: "Обо мне",
  },
  "mobile-4": {
    en: "Contacts",
    uk: "Контакти",
    ru: "Контакты",
  },
};

// Для мене важливо зростати як FrontEnd Developer та застосовувати на практиці свої знання. Найкраща нагорода - це бачити, що створений проект чудово працює! Я комунікабельна, відповідальна, вмію “гуглити” і знаходити рішення, маю досвід застосування методології Scrum при командній роботі, та готова вирішувати будь-які завдання якісно та в строк.

// Для меня важно расти как FrontEnd Developer и применять на практике свои знания. Лучшая награда – это видеть, что созданный проект прекрасно работает! Я коммуникабельна, ответственна, умею “гуглить” и находить решения, имею опыт применения методологии Scrum при командной работе и готова решать любые задачи качественно и в срок.

// It is important for me to grow as a FrontEnd Developer and put my knowledge into practice. The best reward is to see that the created project works great! I am sociable, responsible, able to google and find solutions, I have experience in applying the Scrum methodology in teamwork and I am ready to solve any problems efficiently and on time.

// A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself.
//   I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me

//   Несколько лет назад я увлекся разработкой сайтов и интерфейсов. С тех пор я постоянно совершенствую свои навыки. Сейчас занимаюсь разработкой сайтов и веб-приложений на заказ или для себя.
// Занимаюсь веб-дизайном, фронтенд и бэкенд разработкой уже год. Вам нужен дизайн сайта, верстка сайта, а может сайт под ключ? Тогда свяжитесь со мной

// Attentive Уважний
// Autonomous Самостійний
// Calm Спокійний
// Communicative Комунікабельний
// Diligent Старанний
// Eager to learn Готовий навчатись

// Effective listening skills Вміння вислухати співрозмовник
// Willingness to learn Готовність вчитися
// Good sense of humour Гарне почуття гумору
