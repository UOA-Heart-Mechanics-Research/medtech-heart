@echo off
cls
type logo.txt
echo Starting Medtech Heart App via Docker...
echo.

start "" "chrome.exe" "--start-fullscreen" "http://localhost:5173/model-heart"

docker-compose -f docker-compose.yml up

