const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
});


/*
TASK:
У котів мають бути власники (owner)

Owners:
- first_name
- last_name
- address
- phone

Коти і власники пов'язані між собою. Власник може мати багатьох котів, кіт має тільки одного власника
1:m

ТЗ:
1. Створити сутність Owner (на рівні БД). Внести зміни до структури Cats, щоби втілити зв'язок 1:m
2. Створити модель Owner
3. Прописати методи контроллера для CRUD над сутністю OWNER
4. Прописати ручки для обробки запитів

*/