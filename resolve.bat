@echo off
cd /d "D:\MLH\Anythink-Market-uaddpj4k"
git merge --abort 2>&1
timeout /t 2
git fetch origin 2>&1
timeout /t 2
git pull origin main 2>&1
timeout /t 2
git push origin sithuni_8 --force-with-lease 2>&1
pause
