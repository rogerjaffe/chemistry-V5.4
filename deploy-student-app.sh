#!/bin/bash

# Clean dist folder
echo "Delete dist folder"
rimraf student-app/dist

# Copy files to distribution folder
echo "Copy files to dist folder"
node_modules/.bin/copyfiles -u 1 student-app/assets/**.* student-app/dist
node_modules/.bin/copyfiles -u 1 student-app/css/**.* student-app/dist
node_modules/.bin/copyfiles -u 1 student-app/q/**/*.html student-app/q/**/*.js student-app/q/**/*.css student-app/q/**/structs/*.* student-app/q/**/equations/*.* student-app/dist
node_modules/.bin/copyfiles -u 1 student-app/scripts/*.js student-app/dist
node_modules/.bin/copyfiles -u 1 student-app/*.html student-app/dist
ls -l -R student-app

# Uglify scripts
echo "Uglify app scripts"
for filename in student-app/dist/scripts/*.js; do
  node_modules/.bin/uglifyjs $filename --compress --mangle --source-map -o $filename
done

echo "Uglify question scripts"
for filename in student-app/dist/q/q*/script.js; do
  node_modules/.bin/uglifyjs $filename --compress --mangle --source-map -o $filename
done

echo "Uglify css"
for filename in student-app/dist/css/*.css; do
  node_modules/.bin/uglifycss $filename --output $filename
done
