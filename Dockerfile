FROM node:18 AS builder

ENV REACT_APP_NAME="Spacesheep"

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app

# COPY . /app
RUN npm install
# RUN npm run build

# COPY package.json .
# RUN npm install
COPY . /app


RUN npm run build

# EXPOSE 3000

FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]