#!/bin/sh

# Wait until prisma is avaliable, and download schemas
./scripts/wait-for-it.sh localhost:4467 -- prisma deploy

if [ $DEBUG = 1 ]; then

  echo "Running in debug mode"

  prisma seed && npm run start

else

  echo "Running in production mode"

  node dist/server.js

fi
