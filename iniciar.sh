#!/bin/bash
rm -rf .angular/
#rm -rf node_modules ; npm install
rm -rf node_modules/.vite
#npm cache clean
npm cache verify
ng s
echo abriendo
