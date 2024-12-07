 #-------Stage 1 Start------
 # Base Image
 FROM node:21 AS Backend

 #Setup Working Directory
 WORKDIR /app

 #Copy Code
 COPY . .

 #Package Install
 RUN npm i

 #Test after code
 #RUN npm run test

 #--------Stage 1 Complete-------
 #--------Stage 2 Start---------

 FROM node:21-slim

 WORKDIR /app

 COPY --from=Backend /app .

 COPY .env.sample .env

 EXPOSE 3001
