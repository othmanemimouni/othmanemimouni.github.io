#!/bin/bash

npm run build
git add .
git commit -m "Update and deploy"
git push
npm run deploy
