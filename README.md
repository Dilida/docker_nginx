
### mongo + go + react

### local
#### mongo first
> sudo mongod --dbpath=/data/db
操作DB mongo

#### go
> go run main.go

#### react
> npm run start

### Docker

### mongo + go to 一起用docker compose啟動
> docker-compose up -d --build

### react 單獨手動啟動
> cd web
> docker build -t web .
> docker run -p 8081:80 web