FROM node:18.14.2-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --force
RUN npm run build production
RUN npm install -g serve
CMD serve -s build
