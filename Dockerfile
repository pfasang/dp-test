# The instructions for the first stage
FROM node:10-alpine as builder

RUN apk add --no-cache python make g++

COPY package*.json ./
RUN npm install

# The instructions for second stage
FROM node:10-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

RUN npm install -g prisma

RUN apk add --no-cache bash coreutils
RUN chmod +x ./scripts/

ENTRYPOINT ["scripts/entrypoint.sh"]
