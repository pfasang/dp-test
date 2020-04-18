#!/bin/sh

# Wait until prisma is avaliable, and download schemas
./scripts/wait-for-it.sh prisma:4467

if [ $DEBUG = 1 ]; then

  echo "Running in debug mode"

  prisma deploy && prisma seed --env-file .env && npm run start

else

  echo "Running in production mode"

  node dist/server.js

fi
