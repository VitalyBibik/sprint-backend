# sprint12
## Стек технологий: Node.js, express.js
## Цель: Создание 3 роутов: 
+ ul GET localhost:3000/users	JSON-список всех пользователей
+ ul GET localhost:3000/cards	JSON-список всех карточек
+ul GET localhost:3000/users/8340d0ec33270a25f2413b69	JSON-пользователя с переданным после /users идентификатором. Если такого нет, API +ul должно возвращать 404 статус ответа и JSON:{ "message": "Нет пользователя с таким id" }
+ul Несуществующий адрес	{ "message": "Запрашиваемый ресурс не найден" }
