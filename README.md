# Orders & Products — тестовое задание dZENcode

SPA-приложение для учёта приходов (Orders) и товаров (Products). Тестовое задание на позицию Junior+.

Живая версия:
- Frontend: https://dzencode-test-task-ivory.vercel.app
- Backend API: https://dzencode-test-task-liux.onrender.com/api

## Стек

**Frontend**
- Next.js (App Router) + TypeScript
- Redux Toolkit + RTK Query
- SCSS (BEM) + Bootstrap
- React Hook Form + Joi
- Socket.io-client

**Backend**
- Node.js + Express
- Sequelize + MySQL
- Joi (валидация)
- Socket.io

## Функционал

- Orders: список приходов (название, кол-во продуктов, дата в двух форматах, сумма в двух валютах), детальная панель по клику, удаление с подтверждением
- Products: список, фильтр по типу, создание через форму, удаление
- TopMenu: часы в реальном времени, счётчик активных сессий (Socket.io)
- Переключение языка RU/EN, сохраняется в localStorage
- Адаптивная вёрстка: десктоп / планшет / мобильный (бургер-меню)
- Docker: весь стек поднимается одной командой

## Структура репозитория

```
client/     — Next.js фронтенд
server/     — Express бэкенд
docker-compose.yml
```

## Запуск локально (без Docker)

Нужно: Node 20+, MySQL 8, npm

### 1. Клонировать репозиторий

```bash
git clone https://github.com/MRKucherenko/dzencode_test_task.git
cd dzencode_test_task
```

### 2. Backend

```bash
cd server
npm install
```

Создать `.env` в папке `server`:

```
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=dzencode_test
DB_USER=root
DB_PASSWORD=твой_пароль
```

Создать базу (в MySQL консоли):

```sql
CREATE DATABASE dzencode_test;
```

Прогнать миграции и сиды:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Запуск:

```bash
npm run dev
```

Backend поднимется на `localhost:4000`.

### 3. Frontend

```bash
cd client
npm install
```

Создать `.env.local` в папке `client`:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:4000
```

Запуск:

```bash
npm run dev
```

Открыть `localhost:3000`.

## Запуск через Docker

Из корня репозитория:

```bash
docker-compose up --build
```

Поднимутся три контейнера: MySQL, backend, frontend. При первом запуске нужно один раз прогнать миграции и сиды внутри контейнера backend:

```bash
docker-compose exec server npx sequelize-cli db:migrate
docker-compose exec server npx sequelize-cli db:seed:all
```

Frontend — `localhost:3000`, backend — `localhost:4000`.

## Схема БД

`orders`: id, title, date, description, createdAt, updatedAt
`products`: id, serialNumber, isNew, photo, title, type, specification, guaranteeStart, guaranteeEnd, priceUSD, priceUAH, orderId (FK → orders.id), date, createdAt, updatedAt

Связь: один приход — много продуктов (`products.orderId`).

ER-диаграмма для MySQL Workbench — файл `schema.mwb` в корне репозитория.

## Что не реализовано

Из списка Junior+ не успел или не стал делать по срокам:
- JWT-авторизация
- SSR (server components в Next.js используются частично, полноценный SSR-рендеринг данных не делал)
- Unit-тесты
- Charts

Maps не делал сознательно — в приложении нет геоданных, добавление карты выглядело бы искусственно.

## Тестовые данные

После сидов в базе будет 3 прихода и ~20 продуктов, распределённых между ними — этого достаточно чтобы проверить весь функционал (список, фильтр, детали, удаление, создание).
