// JavaScript для сайта кофейни SOVA

document.addEventListener("DOMContentLoaded", () => {
    // 1. Кнопка «Подробнее»: показать или скрыть дополнительный текст
    const showMoreButton = document.getElementById("showMore");
    const moreText = document.getElementById("moreText");

    if (showMoreButton && moreText) {
        showMoreButton.addEventListener("click", () => {
            const isHidden = moreText.classList.toggle("d-none");

            showMoreButton.textContent = isHidden ? "Подробнее" : "Скрыть";
            showMoreButton.setAttribute("aria-expanded", String(!isHidden));
        });
    }

    // 2. Динамическое создание карточек
    const projectsList = document.getElementById("projectsList");

    if (projectsList) {
        const projects = [
            {
                title: "Ароматный кофе",
                description: "Напитки из свежесваренного кофе на любой вкус."
            },
            {
                title: "Уютная атмосфера",
                description: "Спокойное место для отдыха, встреч и работы."
            },
            {
                title: "Дружелюбный сервис",
                description: "Мы хотим, чтобы каждому гостю было комфортно."
            }
        ];

        projects.forEach((project) => {
            const card = document.createElement("article");
            card.className = "project-card";

            const title = document.createElement("h3");
            title.textContent = project.title;

            const description = document.createElement("p");
            description.textContent = project.description;

            card.append(title, description);
            projectsList.appendChild(card);
        });
    }

    // 3. Проверка формы без перезагрузки страницы
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                formMessage.textContent = "Пожалуйста, заполните все поля.";
                formMessage.className = "form-message error";
                return;
            }

            if (!emailPattern.test(email)) {
                formMessage.textContent = "Введите корректный адрес электронной почты.";
                formMessage.className = "form-message error";
                return;
            }

            formMessage.textContent = `Спасибо, ${name}! Форма заполнена правильно.`;
            formMessage.className = "form-message success";
            contactForm.reset();
        });
    }
});
