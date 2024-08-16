# importing the environment
FROM node:20-alpine3.18

# updating apk-tools
RUN apk -U upgrade

# installing all production dependencies in docker
RUN npm install --legacy-peer-deps


# copying all files in current directory to docker working directory
COPY . .

# exposing the port in which the app is running
EXPOSE 3000

# starting the server
CMD ["npm","start"]
