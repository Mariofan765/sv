# --- Этап 1: Сборка приложения ---
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы манифеста и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код и собираем production-версию
COPY . .
RUN npm run build

# --- Этап 2: Обслуживание статических файлов ---
FROM nginx:stable-alpine

# Копируем собранные статические файлы из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем вашу конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]