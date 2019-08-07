FROM node as builder
WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

CMD ["npm", "start"]

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/default.conf /etc/nginx/conf.default
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
