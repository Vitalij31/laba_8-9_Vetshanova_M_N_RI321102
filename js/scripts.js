document.addEventListener("DOMContentLoaded", function () {
    const submitOrderButton = document.getElementById("submitOrder"); 
    const orderSummaryDiv = document.getElementById("orderSummary"); 

    submitOrderButton.addEventListener("click", function () {

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        let errors = [];
        if (!firstName) errors.push("Поле 'Имя' обязательно для заполнения.");
        if (!lastName) errors.push("Поле 'Фамилия' обязательно для заполнения.");
        if (!phoneNumber.match(/^[8]\d{10}$/)) {
            errors.push("Поле 'Номер телефона' должно начинаться с 8 и содержать 10 цифр.");
        }
        if (!service) errors.push("Поле 'Выбор услуги' обязательно для заполнения.");
        if (!date) errors.push("Поле 'Дата' обязательно для заполнения.");
        if (!time) errors.push("Поле 'Время' обязательно для заполнения.");
        if (date && time) {
            const selectedDateTime = new Date(`${date}T${time}`);
            const currentDateTime = new Date();
            if (selectedDateTime < currentDateTime) {
                errors.push("Выбрано некоректное время. Укажите будущую дату и время.");
            }
        }

        // Если есть ошибки, изменить цвет кнопки на красный
        if (errors.length > 0) {
            submitOrderButton.style.backgroundColor = "#FF4D4D"; // Красный цвет
            alert("Пожалуйста, исправьте следующие ошибки:\n" + errors.join("\n"));
            return;
        }

        // Если всё корректно, изменить цвет кнопки на зеленый
        submitOrderButton.style.backgroundColor = "#4CAF50"; // Зеленый цвет

        const orderSummary = `
            <strong>Сводка заказа:</strong><br>
            Имя: ${firstName}<br>
            Фамилия: ${lastName}<br>
            Номер телефона: ${phoneNumber}<br>
            Услуга: ${service}<br>
            Дата: ${date}<br>
            Время: ${time}
        `;

        orderSummaryDiv.innerHTML = orderSummary;
        orderSummaryDiv.style.display = "block"; 
        setTimeout(() => {
            orderSummaryDiv.style.opacity = "1"; // Постепенно делаем блок видимым
    }, 10); //
    });
     // Валидация формы обратного звонка (HTML5 встроенная)
     const callbackForm = document.getElementById("callbackForm");
     callbackForm.addEventListener("submit", (e) => {
         const callbackName = document.getElementById("callbackName").value.trim();
         if (!callbackName) {
             e.preventDefault();
             alert("Поле 'Имя' обязательно для заполнения.");
    }
    });
});

const callbackForm = document.getElementById("callbackForm");
const callbackSubmitButton = callbackForm.querySelector("button");

callbackSubmitButton.addEventListener("click", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("callbackName").value.trim();
    const email = document.getElementById("callbackEmail").value.trim();
    const topic = document.getElementById("callbackTopic").value.trim();

    let errors = [];
    if (!name) errors.push("Поле 'Имя' обязательно для заполнения.");
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        errors.push("Поле 'E-mail' заполнено некорректно.");
    }
    if (!topic) errors.push("Поле 'Тема' обязательно для заполнения.");

    if (errors.length > 0) {
        alert("Пожалуйста, исправьте следующие ошибки:\n" + errors.join("\n"));
        return;
    }

    alert(`Спасибо, ${name}! Ваша заявка на обратный звонок с темой "${topic}" успешно отправлена.`);
});


