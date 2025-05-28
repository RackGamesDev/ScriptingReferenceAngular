#!/bin/bash
rm -rf .angular/
rm -rf dist/
#rm -rf node_modules ; npm install
rm -rf node_modules/.vite
npm cache verify
npm cache clean
echo limpiado
