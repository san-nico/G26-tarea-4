@echo off
cd /d "%~dp1"
wt -- powershell -NoExit -Command py "\"%~f1\""