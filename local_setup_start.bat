@echo off
@REM start "" "chrome.exe" "--start-fullscreen" "http://localhost:3000/model-heart"
@REM Make sure you have installed nodejs v16.14.0, only works on this version

cls
type logo.txt
echo Starting Medtech Heart App locally version...

start "" "chrome.exe" "--start-fullscreen" "http://localhost:3000/model-heart"

yarn install && yarn dev

pause