@echo off
cls
type logo.txt
echo Starting Medtech Heart App via Docker...
echo.

REM set Docker process name
set docker_process=Docker Desktop.exe

REM check if Docker is running or not
tasklist /FI "IMAGENAME eq %docker_process%" | findstr /I /C:"%docker_process%"
if %errorlevel% == 0 (
    echo Docker is running
) else (
    echo Docker not running currently, try to start docker...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    :LOOP
    docker ps >nul 2>&1
    if errorlevel 1 (  
        timeout /t 1 >nul
        goto :LOOP

    ) else (
        echo Docker is running now!
    )
)


start "" docker-compose -f docker-compose.yml up

timeout /t 10 /nobreak

start "" "chrome.exe" "--start-fullscreen" "http://localhost:3000/model-heart"



